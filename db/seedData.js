const seedData = (connection) => {
  connection.query('CREATE DATABASE phone_book_db', (err) => {
    if (err) {
      console.log('Warning: Database phone_book_db already exists.');
    } else {
      console.log('Database created.');
    }

    connection.query('USE phone_book_db', (err) => {
      if (err) throw err;

      console.log('Using phone_book_db database.');

      const createTableQuery = `CREATE TABLE records (
        id INT(11) NOT NULL AUTO_INCREMENT,
        first_name VARCHAR(20) NOT NULL,
        last_name VARCHAR(20) NOT NULL,
        phone_number VARCHAR(20) NOT NULL,
        PRIMARY KEY (id)
      )`;

      connection.query(createTableQuery, (err) => {
        if (err) {
          console.log('Warning: Table records already exists.');
        } else {
          console.log('Table \'records\' created.');

          const insertRowsQuery = `INSERT INTO records (
            first_name,
            last_name,
            phone_number
          ) VALUES ?`;

          const values = [
            ['Torri', 'Master', '573-276-6279'],
            ['Monika', 'Eyer', '830-893-4540'],
            ['Demetra', 'Hites', '202-216-9185'],
            ['France', 'Hyder', '289-274-2204'],
            ['Kati', 'Savidge', '417-469-1011'],
            ['Cornelia', 'Alaniz', '510-813-8686'],
            ['Berry', 'Mellish', '325-899-2450'],
            ['Sabine', 'Wahlen', '432-741-1289'],
            ['Lia', 'Risher', '213-507-4592'],
            ['Roman', 'Lastrapes', '601-596-5563'],
          ];

          connection.query(insertRowsQuery, [values], (err, result) => {
            if (err) throw err;

            console.log(`${result.affectedRows} rows created.`);
          });
        }
      });
    });
  });
};

module.exports = { seedData };
