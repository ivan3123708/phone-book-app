import { Connection } from 'mysql';
import { QueryError, RowDataPacket } from 'mysql2';
import { Request, Response } from 'express';

export const filterRecords = (connection: Connection, req: Request, res: Response): void => {
  const searchBy = Object.keys(req.query)[0];
  const searchFor = req.query[searchBy];
  const query = `SELECT * FROM records WHERE ${searchBy} LIKE "${searchFor}%"`;

  connection.query(query, (err: QueryError, result: RowDataPacket): void => {
    if (err) {
      console.log(err);
      res.status(400).end();
    } else {
      res.send(result);
    }
  });
};