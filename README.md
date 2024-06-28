# This project is dedicated to mastering the basic javascript array (and not only) methods through the series of simple exercises.

## Prerequisites

1. **You should have Node.js with version 20.12 or higher installed!**
2. **You should have git**

## Project structure:

```
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
```

## How to use:

1. From terminal clone project using `git clone` (if this is sounds not familiar to you check the docs - [git clone](https://git-scm.com/docs/git-clone/#_examples))
2. Open the `exercises` directory and select any of the subjects you're comfortable to start
3. How to test if your solution is correct - use the terminal/command line/shell and run the following command `npm run test`. This command will all tests for each exercise with the prewrittern tests for each method you have to write.
4. if you want to run exact test - run the command `npm run test -- --test-name-pattern='<name of the method>'`. Replace the '<name of the method>' with exact test name you want to run. More about node test runner command line commands you can find here: [command line options](https://nodejs.org/api/cli.html)
