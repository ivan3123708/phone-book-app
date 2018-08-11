import * as path from 'path';
import express from 'express';
import { Request, Response } from 'express';
import * as bodyParser from 'body-parser';
import * as mysql from 'mysql';
import { seedData } from './db/seedData';
import { getRecords } from './db/getRecords';
import { filterRecords } from './db/filterRecords';
import { createRecord } from './db/createRecord';
import { deleteRecord } from './db/deleteRecord';
import { privates } from './config/privates';

const publicPath: string = path.join(__dirname, 'client', 'public');
const port: string | number = process.env.PORT || 5000;

const app: express.Application = express();

app.use(express.static(publicPath));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

const connectionConfig: mysql.ConnectionConfig = {
  host: privates.mysqlHost,
  user: privates.mysqlUser,
  password: privates.mysqlPassword,
};

const connection: mysql.Connection = mysql.createConnection(connectionConfig);

connection.connect((err: mysql.MysqlError) => {
  if (err) {
    console.log('Connection failed.');
  } else {
    console.log('Connected to mysql.');

    try {
      seedData(connection);
    } catch (err) {
      console.log(err);
    }
  }
});

setInterval(() => {
  connection.query('SELECT 1');
}, 5000);

app.get('/api/records', (req: Request, res: Response) => {
  getRecords(connection, res);
});

app.get('/api/filter_records', (req: Request, res: Response) => {
  filterRecords(connection, req, res);
});

app.post('/api/records', (req: Request, res: Response) => {
  createRecord(connection, req, res);
});

app.delete('/api/records', (req: Request, res: Response) => {
  deleteRecord(connection, req, res);
});

app.get('*', (req: Request, res: Response) => {
  res.sendFile(path.join(publicPath, 'index.html'));
});

app.listen(port, () => console.log(`Server running on port ${port}.`));
