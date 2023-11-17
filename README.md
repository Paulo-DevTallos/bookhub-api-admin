to add husky hooks and pre-hooks
```sh
"husky:prepare" : "husky install" ## is callable as npm run husky:prepare

=> npx husky add .husky/pre-commit "npx lint-staged" ## to create pre-commit hook
=> npx husky add .husky/commit-msg 'npx --no-install commitlint --edit $1' ## to create commitmessage-pre hook
```

to watch debug logs when prettier check is executed
```sh
=> npx prettier --check --log-level debug 'src/**'
=> npx prettier --check --write 'src/**' ## use this flag to overwrite the rules
```
