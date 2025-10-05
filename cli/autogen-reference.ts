import { execSync } from "child_process";
import { existsSync, readdirSync, statSync, unlinkSync, rmdirSync, readFileSync, writeFileSync } from "fs";
import { join, resolve } from "path";

#!/usr/bin/env ts-node


// ---------------------------------------------------------------------------- //
//                                    Common                                    //
// ---------------------------------------------------------------------------- //

const airdrops = "docs/reference/airdrops/contracts";
const flow = "docs/reference/flow/contracts";
const lockup = "docs/reference/lockup/contracts";

function findAndDeleteMdFiles(dir: string) {
    if (!existsSync(dir)) return;
    for (const file of readdirSync(dir)) {
        const fullPath = join(dir, file);
        if (statSync(fullPath).isDirectory()) {
            findAndDeleteMdFiles(fullPath);
        } else if (file.endsWith(".md")) {
            unlinkSync(fullPath);
        }
    }
}

function lint(repo: string) {
    const contracts = `docs/reference/${repo}/contracts`;
    execSync(`bun prettier --log-level silent --write ${contracts}`);
    execSync(`sd --string-mode "\\*" "" $(find ${contracts} -type f -name "*.md")`);
    execSync(`bun prettier --log-level silent --write ${contracts}`);
}

function run(repo: "airdrops" | "flow" | "lockup") {
    execSync(`cd repos/${repo} && rm -rf ./docs && forge doc && cd ../../`);
    const contracts = `docs/reference/${repo}/contracts`;
    findAndDeleteMdFiles(contracts);

    execSync(
        `rsync --archive --exclude "README.md" --exclude "SUMMARY.md" repos/${repo}/docs/src/src/* ${contracts}`
    );
    execSync(`find ${contracts} -type f -name "*.md" -execdir mv {} .. \\;`);
    execSync(`find ${contracts} -type d -empty -delete`);
    execSync(
        `sd "\\{I(\\w+)\\}" "[I$1](/${contracts}/interfaces/interface.I$1.md)" $(find ${contracts} -type f -name "*.md")`
    );

    if (repo === "airdrops") {
        execSync(
            `sd "\\{SablierLockup\\}" "[SablierLockup](/reference/lockup/contracts/contract.SablierLockup.md)" $(find ${airdrops} -type f -name "*.md")`
        );
    }

    if (repo === "lockup") {
        execSync(
            `sd "InvalidWithdrawalInWithdrawMultiple.md" "ISablierLockupBase.md#invalidwithdrawalinwithdrawmultiple" $(find ${contracts} -type f -name "*.md")`
        );
        execSync(
            `sd "/node_modules/forge-std/src/mocks/MockERC721.sol/contract.MockERC721.md" "https://eips.ethereum.org/EIPS/eip-165" $(find ${contracts} -type f -name "*.md")`
        );
    }

    execSync(
        `sd "\\{Sablier(\\w+)Base\\}" "[Sablier$1Base](${contracts}/abstracts/abstract.Sablier$1Base.md)" $(find ${contracts} -type f -name "*.md")`
    );
    execSync(
        `sd "\\{Sablier(\\w+)\\}" "[Sablier$1](/${contracts}/contract.Sablier$1.md)" $(find ${contracts} -type f -name "*.md")`
    );
    execSync(
        `sd "src/abstracts/\\w+\\.sol/([\\w.]+)" ${contracts}'/abstracts/$1' $(find ${contracts} -type f -name "*.md")`
    );
    execSync(
        `sd "src/interfaces/\\w+\\.sol/([\\w.]+)" ${contracts}'/interfaces/$1' $(find ${contracts} -type f -name "*.md")`
    );
    execSync(
        `sd "src/\\w+\\.sol/([\\w.]+)" ${contracts}'/$1' $(find ${contracts} -type f -name "*.md")`
    );
}

function prependSidebarPosition(contractPath: string, position: number) {
    if (!existsSync(contractPath)) return;
    const content = readFileSync(contractPath, "utf8");
    const sidebar = `---\nsidebar_position: ${position}\n---\n`;
    writeFileSync(contractPath, sidebar + content);
}

// ---------------------------------------------------------------------------- //
//                                     Lockup                                   //
// ---------------------------------------------------------------------------- //

run("lockup");
prependSidebarPosition(`${lockup}/contract.SablierLockup.md`, 1);
prependSidebarPosition(`${lockup}/contract.SablierBatchLockup.md`, 1);
prependSidebarPosition(`${lockup}/contract.LockupNFTDescriptor.md`, 3);
lint("lockup");

// ---------------------------------------------------------------------------- //
//                                   Airdrops                                   //
// ---------------------------------------------------------------------------- //

run("airdrops");
prependSidebarPosition(`${airdrops}/contract.SablierMerkleFactory.md`, 2);
prependSidebarPosition(`${airdrops}/contract.SablierMerkleInstant.md`, 3);
prependSidebarPosition(`${airdrops}/contract.SablierMerkleLL.md`, 3);
prependSidebarPosition(`${airdrops}/contract.SablierMerkleLT.md`, 3);
lint("airdrops");

// ---------------------------------------------------------------------------- //
//                                      Flow                                    //
// ---------------------------------------------------------------------------- //

run("flow");
prependSidebarPosition(`${flow}/contract.SablierFlow.md`, 1);
prependSidebarPosition(`${flow}/contract.FlowNFTDescriptor.md`, 2);
lint("flow");
