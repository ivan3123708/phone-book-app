const filterRecords = (connection, req, res) => {
  const searchBy = Object.keys(req.query)[0];
  const searchFor = req.query[searchBy];
  const query = `SELECT * FROM records WHERE ${searchBy} LIKE "${searchFor}%"`;

  connection.query(query, (err, result) => {
    if (err) {
      console.log(err);
      res.status(400).end();
    } else {
      res.send(result);
    }
  });
};

module.exports = { filterRecords };
