to add husky hooks and pre-hooks
```sh
"husky:prepare" : "husky install" ## is callable as npm run husky:prepare

=> npx husky add .husky/pre-commit "npx lint-staged" ## to create pre-commit hook
=> npx husky add .husky/commit-msg 'npx --no-install commitlint --edit $1' ## to create commitmessage-pre hook
```
