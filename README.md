# This project is dedicated to mastring the basic jascript array (and not only) methods through the series of simple exercises.

## Prerequistes

1. **You should have Nodejs with version 20.12 or higher installed!**
2. **You should have git**

## Project structure:

```javascript
 |__data  //this directory contains the sourse json collection you will work with
 |
 |__exercises //in this folder all exercises are arranged by one javascript method
 |   |
 |   |__array-coolection // exercises to train some common array/collction methods
 |     |
 |     |__ filter.js
 |        ...
 |
 |__tests // this directory contains all the tests for each method written in exxxercises, you should not change anything in this directory. But if you are courious and want to learn how to use native test runner form node and wtite your oun tests - welcome.
 |
 |__ types // here is some typedefinitions to make IDE a bit more smart in completion. My intention to use jsdoc was just to use as much native platform fatures as possible. No any tooling which will require any aditional steps in installation / build steps etc...
```

## How to use:

1. From terminam clone project using `git clone` (if this is sounds not familiar to you check the docs - [git clone](https://git-scm.com/docs/git-clone/#_examples))
2. Open the `exercises` directory and select any of the subjects you're comfortable to start
3. How to test if your solution is correct - use the terminal/comand line/shell and run the follwing command `npm run test`. This command will all tests for each exercise with the preritten tests for each method you have to write.
4. if you want to run exact test - run the command `npm run test -- --test-name-pattern='<name of the method>'`. Replace the '<name of the method>' with exact test name you want to run. More about node test runner command line commands you can find here: [command line options](https://nodejs.org/api/cli.html)
