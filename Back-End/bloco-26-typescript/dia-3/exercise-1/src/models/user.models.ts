import connection from '../utils/connection';
import { User } from '../interfaces/user.interface';
import { ResultSetHeader } from 'mysql2';

export default async function getAll(): Promise<User[]> {
  const [rows] = await connection.execute('SELECT * FROM Users');
  return rows as User[];
}
