import { Connection } from 'mysql';
import { Request, Response } from 'express';

export declare function createRecord (connection: Connection, req: Request, res: Response): void;