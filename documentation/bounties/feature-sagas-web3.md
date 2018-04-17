## User Story
As a developer I don't want to be forced to pick a library I'm not familiar with or have experience using. The BuidlBox currently uses the `ethers.js` library to interact with the Ethereum Blockchain, but the more popular alternative is `Web3.j`s library.

As a developer I want a swappable state management architecture, so I don't run the risk of picking the wrong library i.e. it becomes deprecated (for any number of reasons) and days/weeks of technical debt are added to my project. Instead I want a swappable Application State Management that provides compability with multiple Javascript libraries responsible for communicating with the Ethereum blockchain. Let the Open Market pick the best solution.

## Background
The ethers.js was originally picked because of the API interface and Javascript promise support. Personally I'm very happy with `ethers` because it's been great to work with, but Web3 just reached 1.0 status and now includes more features and native promise support.

BuidlBox should not be picking favorites and should encourage development on all Javascript libraries.

## Acceptance Criteria
- [ ] Redux Department Store matching the current `assimilation` style. 
- [ ] 1-to-1 matching of the Web3.js functions/methods
- [ ] Integrates with current Redux State Management Patterns

## Technical Details
Sagas are intrinsically complicated. It's not apparent how or why they fit into the state management layer, especially if you're unfamiliar with Redux. This is moreso with the BuidlBox Sagas, because we have a fair amount of "abstraction" using patterns like metadata parameter `delta`, which is used to create an abstraction layor for dispatching and using selectors to query the Redux Store, without requiring more Redux boilerplate.

To be considered complete  only the skeleton is required. You don't have to include actual integation with the Web3 library. A Redux Sagas developer familair with the application architecture will make a pull request to merge the Web3 features. Unless... of course you want to do both, then by all means - you will be tipped additional ETH and learn more about Web3 - win/win.

Please reference the `ethers` store department located in `/src/assimilation/store/ethers/` for an outline of the required files.

- actions.js
- reducers.js
- selectors.js
- sagas.js

### Auto Generate Redux Store Departments - Code Writing Code
Writing boilerplate code for state management is a pain. It's a major drawback of Redux. However, BuidlBox values standardizing data management/streaming patterns for complex Ethereum Blockchain interactions, so Redux is a great candidate for predictable state management across as many decentralize applications as possible.

To make it easy a "code generator" template for redux store departments can be found in the `resources` folder. Simply map Redux Store Actions/Reducers/Sagas to a Javascript library using the auto-generator using our simple code generator. If you want to save hours of writing boilerplate please use the code generator. Plus you don't have to learn Redux, you can just make the correct API mappings and a Redux/Sagas Developer can handle the rest.

Open the `resources/redux-derpartment/ethers/` in the Terminal and type the command `node actions.js`

![Auto Generated Code](https://pbs.twimg.com/media/Da8BRHoWsAE6GgI.jpg)