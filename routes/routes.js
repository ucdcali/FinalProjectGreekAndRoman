import express from 'express';

import { loadPage, addPoint, edit, pointPage, del } from '../controllers/pointControllers.js';
import { adminEnter, editEnter, login } from '../controllers/adminControllers.js';
import { requireAuth } from '../middleware/auth.js';

export const router = express.Router();

//write a route
router.get("/", loadPage);

router.post("/addPoint", addPoint);

router.get("/login", login);
router.post('/adminEnter', adminEnter);
router.get('/editEnter', requireAuth, editEnter);
//edit
router.get('/:id/edit', edit);

router.post('/:id', pointPage);

//delete
router.post('/:id/delete', del);