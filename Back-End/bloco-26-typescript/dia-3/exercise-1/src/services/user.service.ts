import { User } from '../interfaces/user.interface';
import * as userModel from '../models/user.models';

export async function getAll() {
  const data = await userModel.getAll();
  return {status: 200, data};
}