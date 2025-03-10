# Contributing

Feel free to dive in! [Open](https://github.com/sablier-labs/docs/issues/new) an issue,
[start](https://github.com/sablier-labs/docs/discussions/new/choose) a discussion or submit a PR. For any informal
concerns or feedback, please join our [Discord server](https://discord.gg/bSwRCwWRsT).

Contributions to Sablier Docs are welcome by anyone interested in improving readability, or adding new features.

## Pre Requisites

You will need the following software on your machine:

- [Git] (https://git-scm.com/downloads)
- [Node.Js] (https://nodejs.org/en/download/)
- [Bun] (https://bun.sh/)

### Set Up

Clone this repository:

```shell
$ git clone git@github.com:sablier-labs/docs.git && cd docs
```

Then, inside the project's directory, run this to install the Node.js dependencies:

```shell
$ bun install
```

Create a new branch and switch to it, this is where all development work should be done:

```shell
$ git switch <name-of-branch>
```

Now you can start making changes.

Run the following command to starts a local development server and opens up a browser window.

```shell
$ bun run start
```

To see a list of all available scripts:

```shell
$ bun run
```

## Pull Requests

- Before you submit your Pull Request (PR), search the project for an open or closed PR related to your submission to
  avoid duplicating effort.
- Make your changes in a new git branch.
- Commit your changes. Your commit message should follow the
  [Conventional Commits](https://www.conventionalcommits.org/en/v1.0.0/) specification
- Make sure `bun run check` passes.
- Open a pull request from your forked repository to the original repository.

When making a pull request, ensure that:

- A descriptive summary of the PR has been provided.

## Integration with VSCode:

Install the following VSCode extensions:

- [code-spell-checker](https://marketplace.visualstudio.com/items?itemName=streetsidesoftware.code-spell-checker)
- [vscode-tree-language](https://marketplace.visualstudio.com/items?itemName=CTC.vscode-tree-extension)
