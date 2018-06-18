
# Phone Book App

## Description

Phone book application with following features:

* Adding a record into database with “First Name”, “Last Name”, “Telephone Number” fields from manual data entry form
* Listing of all the records (possibly) currently (added but not deleted) in the database
* Listing of all the records (possibly 0) that match search criteria for “Last Name”
* Deleting of the record from the database

## Requirements

Node.js and MySQL installed

## Installation and Usage

1. Clone the repo:

```
$ git clone https://github.com/ivan3123708/phone-book-app.git
```

2. Change the following lines in <code>server.js</code> in order to make connection to MySQL installed on your machine

Comment out or delete line 10:

```
// const privates = require('./config/privates');
```

Provide your user and password values on lines 23 and 24, like in this example:
```
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'yourmysqluser',
  password: 'yourmysqlpassword',
});
```

3. Install server-side dependencies:

```
$ npm install
```

4. Install client-side dependencies:

```
$ cd client
$ npm install
```

4. Build the app:

```
$ npm run build
```

5. Run the app:

```
$ cd ..
$ npm run start
```

The application should now run on <code>localhost:5000</code>

## Tech Stack

* React
* Sass
* Node/Express
* MySQL