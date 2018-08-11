import { Connection } from 'mysql';
import { QueryError, RowDataPacket } from 'mysql2';
import { Request, Response } from 'express';
import { getRecords } from './getRecords';

export const deleteRecord = (connection: Connection, req: Request, res: Response): void => {
  const query = `DELETE FROM records WHERE id = ${req.query.id}`;

  connection.query(query, (err: QueryError, result: RowDataPacket): void => {
    if (err) {
      console.log(err);
      res.status(400).end();
    } else {
      console.log(`${result.affectedRows} rows deleted.`);
      getRecords(connection, res);
    }
  });
};