grep -rl '*Emits' ./protocol/technical-reference-v2 | xargs sed -i '' 's/*Emits/:::note\n\nEmits/g';
grep -rl '\- .*\*' ./protocol/technical-reference-v2 | xargs sed -i '' 's/^\(- .*\)\*$/\1\n\n:::\n/g';

grep -rl '*You might' ./protocol/technical-reference-v2 | xargs sed -i '' 's/*You might/:::note\n\nYou might/g';
grep -rl '\- .*\*' ./protocol/technical-reference-v2 | xargs sed -i '' 's/^\(- .*\)\*$/\1\n\n:::\n/g';

grep -rl '*Notes' ./protocol/technical-reference-v2 | xargs sed -i '' 's/*Notes/:::note\n\nNotes/g';
grep -rl '\- .*\*' ./protocol/technical-reference-v2 | xargs sed -i '' 's/^\(- .*\)\*$/\1\n\n:::\n/g';

grep -rl '*Checks that:' ./protocol/technical-reference-v2 | xargs sed -i '' 's/*Checks that:/:::note\n\nChecks that:/g';
grep -rl '[0-9]\. .*\*' ./protocol/technical-reference-v2 | xargs sed -i '' 's/^\([0-9]\. .*\)\*$/\1\n\n:::\n/g';

grep -rl '\$\$' ./protocol/technical-reference-v2 | xargs sed -i '' 's/\$\$/`/g';
grep -rl ' \$' ./protocol/technical-reference-v2 | xargs sed -i '' 's/ \$/ `/g';
grep -rl '\$ ' ./protocol/technical-reference-v2 | xargs sed -i '' 's/\$ /` /g';

grep -rl ' {[^\n]' ./protocol/technical-reference-v2 | xargs sed -i '' 's/ {/ `/g';
grep -rl '} [^\*]' ./protocol/technical-reference-v2 | xargs sed -i '' 's/} [^\*]/` /g';

grep -rl 'src/interfaces/.[^)]*\.sol' ./protocol/technical-reference-v2 | xargs sed -i '' 's/src\/interfaces\/.[^)]*\.sol/protocol\/technical-reference-v2\/interfaces/g';
grep -rl 'src/abstracts/.[^)]*\.sol' ./protocol/technical-reference-v2 | xargs sed -i '' 's/src\/abstracts\/.[^)]*\.sol/protocol\/technical-reference-v2\/abstracts/g';
grep -rl 'src/.*\.sol/' ./protocol/technical-reference-v2 | xargs sed -i '' 's/src\/.*\.sol\//protocol\/technical-reference-v2\//g';
