import express from 'express';
import usersController from '../controllers/controllerUsers.js'

const router = express.Router();

router.get('/', usersController.getAllUsers);
router.post('/', usersController.createNewUser);


export default router;