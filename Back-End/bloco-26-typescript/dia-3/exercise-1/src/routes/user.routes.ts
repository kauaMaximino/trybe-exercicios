import express from 'express';
import * as userController from '../controllers/user.controller';

const user = express.Router();

user.get('/users', userController.getAll);

export default user;