import express from 'express';

import { loadPage, addPoint, edit, pointPage, del } from '../controllers/pointControllers.js';
import { adminEnter, editEnter, login } from '../controllers/adminControllers.js';

export const router = express.Router();

//write a route
router.get("/", loadPage);

router.post("/addPoint", addPoint);

router.get("/login", login);
router.post('/adminEnter', adminEnter);
router.get('/editEnter', editEnter);
//edit
router.get('/:id/edit', edit);

router.post('/:id', pointPage);

//delete
router.post('/:id/delete', del);