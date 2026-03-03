import express from 'express';
import usersController from '../controllers/controllerUsers.js'

const router = express.Router();

router.get('/', usersController.getAllUsers);
router.get('/:id', usersController.getUserById)
router.post('/', usersController.createNewUser);
router.patch('/:id', usersController.updateUser);
router.delete('/:id', usersController.deleteUser);

export default router;