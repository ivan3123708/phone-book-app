const getRecords = (connection, res) => {
  const query = 'SELECT * FROM records';

  connection.query(query, (err, result) => {
    if (err) {
      console.log(err);
      res.status(400).end();
    } else {
      res.send(result);
    }
  });
};

module.exports = { getRecords };
