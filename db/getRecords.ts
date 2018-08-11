import { Connection } from 'mysql';
import { QueryError, RowDataPacket } from 'mysql2';
import { Response } from 'express';

export const getRecords = (connection: Connection, res: Response): void => {
  const query = 'SELECT * FROM records';

  connection.query(query, (err: QueryError, result: RowDataPacket): void => {
    if (err) {
      console.log(err);
      res.status(400).end();
    } else {
      res.send(result);
    }
  });
};