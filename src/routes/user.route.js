import express from 'express';
import * as UserController from '../controller/UserController.js';
import { protect, authorizeSelf } from '../middleware/auth.js';
import { validate } from '../middleware/validate.js';
import { registerSchema, changePasswordSchema, loginSchema } from '../validations/user.validation.js';

const UserRoute = express.Router();

UserRoute.post('/register', validate(registerSchema), UserController.register);
UserRoute.post('/login', validate(loginSchema), UserController.login);

UserRoute.get('/', protect, UserController.getAllUsers);
UserRoute.get('/:id', protect, authorizeSelf, UserController.getUserById);
UserRoute.patch('/password', protect, validate(changePasswordSchema), UserController.changePassword);
UserRoute.delete('/:id', protect, authorizeSelf, UserController.deleteUser);

export default UserRoute;
