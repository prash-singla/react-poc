#Tuul's Angular Application Repository

> Information about project environment and setting up project on your local machine.

*Note: All work should be in the app folder.  Do not work directly in the dist folder.*

## Quick Start

1. Download and install Google Chrome from: https://www.google.com/intl/en/chrome/browser/
2. Install OSX dev tools: https://developer.apple.com/xcode/downloads/
3. Download and install homebrew: http://brew.sh/
4. Now run the following commands from a terminal:
`brew install node`
`npm install --global gulp`

5. Make sure you have a ssh github private key, if not folllow these steps: https://help.github.com/articles/generating-ssh-keys/
6. Enter your development directory and use the command:
`git clone git@github.com:tuulbox/ng-tuulapps.git`
7. Navigate to the ng-tuulapps directory and run the command:
`npm install`
8. Start the application:
`gulp [app-name]`

### Run unit tests:
```
gulp [app-name]:unit
```
### Load mock data:
```
gulp [app-name] --env=mock
```
### Run dist build: 
```
gulp [app-name] -d --env=prod
```
### Run a dist build and start a server to check:
```
gulp business -d -s
```

