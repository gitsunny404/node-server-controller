import express from 'express';
import { getAllusers, createUser, getOneuser, deleteUser, updateUser } from '../controllers/users.controllers.js';
const router = express.Router();

router.get('/', getAllusers);

router.post('/', createUser);

router.get('/:id', getOneuser);

router.delete('/:id', deleteUser);

router.put('/:id', updateUser);

export default router;