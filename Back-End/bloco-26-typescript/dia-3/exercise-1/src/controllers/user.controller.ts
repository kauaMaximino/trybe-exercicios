import { Request, Response, NextFunction } from 'express';

import { User } from '../interfaces/user.interface';
import * as userService from '../services/user.service';

export async function getAll(request: Request, response: Response) {
  const { status, data } = await userService.getAll();
  response.status(status).json(data);
}
