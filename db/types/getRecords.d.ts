import { Connection } from 'mysql';
import { Response } from 'express';

export declare function getRecords (connection: Connection, res: Response): void;