import app from './app';
import 'express-async-errors';
import {Request, Response} from 'express';

const PORT = process.env.PORT || 5000;

app.get('/', (request: Request, response: Response) => { 
  response.send('Hello world!');
})

app.listen(PORT, () => {
  console.log(`Server on port ${PORT}`);
});