const { getRecords } = require('./getRecords');

const deleteRecord = (connection, req, res) => {
  const query = `DELETE FROM records WHERE id = ${req.query.id}`;

  connection.query(query, (err, result) => {
    if (err) {
      console.log(err);
      res.status(400).end();
    } else {
      console.log(`${result.affectedRows} rows deleted.`);
      getRecords(connection, res);
    }
  });
};

module.exports = { deleteRecord };
