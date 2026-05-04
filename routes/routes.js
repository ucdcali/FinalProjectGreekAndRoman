import express from 'express';

import { loadPage, addPoint, edit, pointPage, del } from '../controllers/pointControllers.js';
import { adminEnter, editEnter } from '../controllers/adminControllers.js';

export const router = express.Router();

//write a route
router.get("/", loadPage);

router.post("/addPoint", addPoint);

router.get('/adminEnter', adminEnter);
router.get('/editEnter', editEnter);
//edit
router.get('/:id/edit', edit);

router.post('/:id', pointPage);

//delete
router.post('/:id/delete', del);