import { Connection } from 'mysql';
import { Request, Response } from 'express';

export declare function deleteRecord (connection: Connection, req: Request, res: Response): void;