import { Connection } from 'mysql';
import { Request, Response } from 'express';

export declare function filterRecords (connection: Connection, req: Request, res: Response): void;