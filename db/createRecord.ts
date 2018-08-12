import { Connection } from 'mysql';
import { QueryError, RowDataPacket } from 'mysql2';
import { Request, Response } from 'express';
import { getRecords } from './getRecords';

export const createRecord = (connection: Connection, req: Request, res: Response): void => {
  const { firstName, lastName, phoneNumber } = req.body;
  const query = `INSERT INTO records (first_name, last_name, phone_number) VALUES ("${firstName}", "${lastName}", "${phoneNumber}")`;

  connection.query(query, (err: QueryError, result: RowDataPacket): void => {
    if (err) {
      console.log(err);
      res.status(400).end();
    } else {
      console.log(`${result.affectedRows} rows created.`);
      getRecords(connection, res);
    }
  });
};