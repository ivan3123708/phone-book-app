# MERN App Boilerplate

## Description

Lightweight boilerplate for building apps with MERN stack.
Includes configured express.js server file with pre-installed mongoose package and setup for client side with webpack configuration and react with redux ready for start developing the app.

## Installation and Usage

1. Clone the repo:
```
$ git clone git@github.com:ivan3123708/mern_app_boilerplate.git
```
2. Install server-side dependencies:
```
$ cd mern_app_boilerplate
$ npm install
```
3. Install client-side dependencies:
```
$ cd client
$ npm install
```
4. Start building your app

## Brief Explanation for Beginners

### Server-side

**server.js** - Your express server configuration. Here you manage routes and connection to your mongoDB server.

### Client-side

**webpack.config.js** - Webpack configuration where you setup babel, loaders, dev server, output file etc.

**src/** - Directory containing source code of your app with index.js as the base file that connects all the components, reducers, styles etc.

**public/** - Public directory which serves index.html file and bundled versions of your .js and .css files.