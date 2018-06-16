const { getRecords } = require('./getRecords');

const createRecord = (connection, req, res) => {
  const { firstName, lastName, phoneNumber } = req.body;

  const query = `INSERT INTO records (first_name, last_name, phone_number) VALUES ("${firstName}", "${lastName}", "${phoneNumber}")`;
  connection.query(query, (err, result) => {
    if (err) {
      console.log(err);
      res.status(400).end();
    } else {
      console.log(`${result.affectedRows} rows created.`);
      getRecords(connection, res);
    }
  });
};

module.exports = { createRecord };
