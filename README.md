# <a href="#" target="_blank">Local Pick</a>
Mobile app designed for locals to save and share good local restaurants.

### App Features
- Save local restaurants and display in a list
- View saved restaurants
- Share restaurants list with family and friends through QR code
- Persistent user login

### Accomplishments
- Created a full scale application with front-end and back-end integration
- Technologies used:
   - React Native
   - Firebase
   - Sass
   - Google Place API

### Project Planning and Progression Management
- Click on the links below to view the project planning and progression tracking tools
   - <a href="https://www.figma.com/file/SuqJ9IfEntjVX7PLC0EJs0r6/Local-Pick?node-id=0%3A1" target="_blank">Wireframe planning</a>

### Setup Instructions
This repo is built with React Native with EXPO. Follow the below setup instructions to get started.
1. Fork this repo
1. Clone your forked copy of this repo
   - `git clone https://github.com/[your_username]/localpick.git`
1. Change directory into the newly cloned repo
   - navigate to the application folder `cd localpick`
1. Install dependencies
   - `npm install`
   - navigate to the api folder `cd public/api`
   - follow composer installation instructions <a href="https://getcomposer.org/download/" target="_blank">here</a> to install composer locally into the folder
   - `php composer.phar install`
1. Create credential files
   1. API credentials
       - navigate back to the application folder
       - make a copy of the api_keys.js.config file and rename new file to api_keys.js
       - add your Google credentials
