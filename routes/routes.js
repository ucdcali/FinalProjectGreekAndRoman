import express from 'express';

import { loadPage, addPoint, edit, pointPage, del } from '../controllers/pointControllers.js';
import { loadEvents, adminEvents, addEvent, deleteEvent, studentEvents} from '../controllers/eventControllers.js';
import { adminEnter, editEnter, login } from '../controllers/adminControllers.js';
import { requireAuth } from '../middleware/auth.js';

export const router = express.Router();

//write a route
router.get("/", loadPage);

router.post("/addPoint", addPoint);
router.get('/adminEnter', adminEnter);
router.get('/editEnter', editEnter);
router.get('/events', loadEvents);
router.get('/adminEvents', adminEvents);
router.get('/studentEvents', studentEvents);
router.post('/addEvents', addEvent);
router.post('/deleteEvent/:id', deleteEvent);

router.get("/login", login);
router.post('/adminEnter', adminEnter);
router.get('/editEnter', requireAuth, editEnter);
//edit
router.get('/:id/edit', edit);
router.post('/:id', pointPage);
//delete
router.post('/:id/delete', del);