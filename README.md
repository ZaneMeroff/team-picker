# Team Generator ⛹️‍♀️
use this app to generate random teams with ease!

#### Link to Live Site
http://zanemeroff.github.io/team-picker **this link is still under construction**

#### Introduction
Welcome to Team Generator, a mobile friendly app created to make assigning random teams quick and easy! Use it for board game night, volleyball in the park, or virtually any situation where you need to pick teams without human bias. I decided to build this project in order to practice my new skills working with Vue.js and to learn about front end testing in Vue with Jest. While there are still more tests to be written, this project has helped me better understand testing suites within the Vue.js framework.

#### Screenshot
![screenshots](https://user-images.githubusercontent.com/53405028/88744053-86821300-d103-11ea-98b3-a6d69024be7c.jpg)

#### Jest Testing Suite
30 unit tests have been written so far, however, the testing suite is still a work in progress. I have written passing tests that cover happy and sad paths for almost all component methods. Snapshot tests confirming correct renders are included for all four components. There are also tests confirming the default values of all elements in the `data()` object as well as `props`. For future iterations I would like to additionally test all user interactions with the UI and further the test coverage.

```
COVERAGE    FILE
22 tests    test/unit/App.spec.js
03 tests    test/unit/PlayerNameInput.spec.js
03 tests    test/unit/NumSelector.spec.js
02 tests    test/unit/TeamDisplay.spec.js
```

#### Directions for Use
- First, you must select the number of desired teams as well as the number of desired players. The number selection boxes cannot be less than two players or two teams and the number of teams cannot be greater than the number of players. After you have made your selection, press the right arrow button near the top of the screen.
- Now you must enter a name for each player. When you are finished, press the right arrow near the top of the screen again to see the results. An error message is displayed if you try to advance screens without entering a name into each text input.
- The last screen displays a randomized output of each team and list of players.
- At any time you may press the left arrow button to return to the previous screen. This app is still under construction and at times previous data is lost when selecting the back arrow button. This will be fixed in future iterations.
- Please see the issues tab on GitHub for known bugs and desired features. I would love to hear from you, so feel free to create an issue with comments or feedback. Thanks!

#### Technologies Used
- Vue.js
- Vue Test Utils
- Vue Template Compiler
- Jest
- JavaScript
- HTML
- CSS

#### How to run app on a local machine with NPM
1. shut down any live servers you currently have running (`control` + `c`)
2. clone down this repo to desired location
3. `cd` into the new repo directory
4. run `npm install`
5. run `npm run serve`
6. you should now be able to run the app in your browser from the url: `http://localhost:8080`

#### How to run the Jest testing suite with NPM
1. after the project has been cloned down and `npm install` has been ran, `cd` into the root directory
2. run `npm test` to view test results

#### This project was created by:
Zachary Nemeroff https://github.com/ZaneMeroff
