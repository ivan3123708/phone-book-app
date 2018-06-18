
# Phone Book App

## Description

Phone book application with following features:

* Adding a record into database with “First Name”, “Last Name”, “Telephone Number” fields from manual data entry form
* Listing of all the records (possibly) currently (added but not deleted) in the database
* Listing of all the records (possibly 0) that match search criteria for “Last Name”
* Deleting of the record from the database

## Requirements

Node.js and MySQL installed

## Installation and Usage on Local Machine

1. Clone the repo:

```
$ git clone https://github.com/ivan3123708/phone-book-app.git
```

2. Add parameters in order to connect to MySQL on your machine:

Create a file named ```dev.js``` and place it inside of ```config/``` directory.

Inside ```dev.js``` paste this block of code, change ```mysqlUser``` and ```mysqlPassword``` and save the file:

```
module.exports = {
  mysqlHost: 'localhost',
  mysqlUser: '<your mysql user here>',
  mysqlPassword: '<your mysql password here>',
  mysqlDatabase: 'phone_book_db',
};
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

5. Build the app:

```
$ npm run build
```

6. Run the app:

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
