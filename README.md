## Setup project
Run `npm install` to download and install all modules

## Run tests
Run `env URL=<path> ./node_modules/.bin/wdio wdio.conf.js` command to run test for provided html by `path`.

## Demo
Run `npm run start` to start server with valid and ivalid html files.
Run `npm run test` to run tests for valid html file
Run `npm run invalid-test` to run tests for invalid html

## Test results
If test is failed, you can find diff image using `./.tmp/diff/*` folder