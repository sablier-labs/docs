git clone git@github.com:sablierhq/v2-core.git;
cd v2-core/;
forge install --no-commit sablierhq/v2-core;
echo "@sablier/v2-core/=lib/v2-core/src/" >> remappings.txt;

forge doc;

mv ./docs/src/src/interfaces/hooks/*.sol/*.md ./docs/src/src/interfaces;
mv ./docs/src/src/interfaces/*.sol/*.md ./docs/src/src/interfaces;
mv ./docs/src/src/libraries/*.sol/*.md ./docs/src/src/libraries;
mv ./docs/src/src/*.sol/*.md ./docs/src/src;

rm -rf ./docs/src/README.md ./docs/src/SUMMARY.md ./docs/src/static ./docs/src/src/types ./docs/src/src/README.md ./docs/src/src/libraries/README.md ./docs/src/src/interfaces/README.md ./docs/src/src/interfaces/hooks;

cd ../;
cp -r ./v2-core/docs/src/src/* ./protocol/technical-reference-v2;
rm -rf ./v2-core;

grep -rl '*Emits' ./protocol/technical-reference-v2 | xargs sed -i '' 's/*Emits/ :::note\n\nEmits/g';
grep -rl '\- .*\*' ./protocol/technical-reference-v2 | xargs sed -i '' 's/^\(- .*\)\*$/\1\n\n:::\n/g';

grep -rl '*Checks that:' ./protocol/technical-reference-v2 | xargs sed -i '' 's/*Checks that:/ :::note\n\nChecks that:/g';
grep -rl '[0-9]\. .*\*' ./protocol/technical-reference-v2 | xargs sed -i '' 's/^\([0-9]\. .*\)\*$/\1\n\n:::\n/g';

grep -rl '\$\$' ./protocol/technical-reference-v2 | xargs sed -i '' 's/\$\$/`/g';
grep -rl ' \$' ./protocol/technical-reference-v2 | xargs sed -i '' 's/ \$/ `/g';
grep -rl '\$ ' ./protocol/technical-reference-v2 | xargs sed -i '' 's/\$ /` /g';

grep -rl ' {[^\n]' ./protocol/technical-reference-v2 | xargs sed -i '' 's/ {/ `/g';
grep -rl '} [^\*]' ./protocol/technical-reference-v2 | xargs sed -i '' 's/} [^\*]/` /g';

grep -rl 'src/interfaces/.[^)]*\.sol' ./protocol/technical-reference-v2 | xargs sed -i '' 's/src\/interfaces\/.[^)]*\.sol/protocol\/technical-reference-v2\/interfaces/g';

grep -rl 'src/.*\.sol/' ./protocol/technical-reference-v2 | xargs sed -i '' 's/src\/.*\.sol\//protocol\/technical-reference-v2\//g';
