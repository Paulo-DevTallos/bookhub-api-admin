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

## ações para melhoria do script:
=> git diff --staged --name-only take the path of files added to stage area
```

is possible to add environments to take the path passed to prettier check
```sh
=> npx prettier --check --log-level debug $PATH
=> npx prettier --check --write $PATH

## Ex:
"format:debuger": "npx prettier --check --log-level debug $PATH"

PATH='/src/my-path...' npm run format:debuger
```
