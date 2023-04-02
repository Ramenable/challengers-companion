# challengers-companion
MAS 8803: A mobile app for matching new League of Legends players to a suitable champion and providing them the resources they need to succeed.

## Frontend Installation Notes

**Prerequisites:**
Node 14
Ruby 2.7.6
Xcode version 10
Xcode Command Line Tools
Cocoapods

Detailed instructions can be found here (up until the Creating a new application section): https://reactnative.dev/docs/environment-setup

Make sure you go into the /ChallengersCompanion/ios subdirectory and run 
`sudo xcode-select -s /Applications/Xcode.app/Contents/Developer`

`pod install`
Pod troubleshooting: https://stackoverflow.com/questions/63422533/react-native-pod-install-issue-cannot-load-such-file-node-modules-react

**Running the frontend**

1. Run metro (the bundler) in its own terminal:
`npx react-native start`

If an error similar to "Unable to resolve module `./index`", try running this instead to reset the metro cache: 
`npx react-native start --reset-cache`

2. Run the app in its own terminal:
`npx react-native run-ios`

## Backend Installation Notes

Make sure you go into the project directory and run 
`npm install`

Run test code with following command when in root directiory
`node ./challengers-companion/App.js`


Current Functionality:
Pulls Account Data, Champion Mastery Level, and Challenge Level
Displays information in Console