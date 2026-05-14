import express from 'express';

import { loadPage, addPoint, edit, pointPage, del, pointHistory} from '../controllers/pointControllers.js';
import { loadEvents, adminEvents, addEvent, deleteEvent, studentEvents} from '../controllers/eventControllers.js';
import { adminEnter, editEnter, login } from '../controllers/adminControllers.js';
import { requireAuth } from '../middleware/auth.js';

export const router = express.Router();

//general studen page load
router.get("/", loadPage);

//event pages
router.get('/events', loadEvents);
router.get('/adminEvents', adminEvents);
router.get('/studentEvents', studentEvents);
router.post('/addEvents', addEvent);
router.post('/deleteEvent/:id', deleteEvent);

//admin login pages
router.get("/login", login);
router.post('/adminEnter', adminEnter);
router.get('/editEnter', requireAuth, editEnter);
//admin pages
router.post("/addPoint", addPoint);
router.get('/adminEnter', adminEnter);
router.get('/editEnter', editEnter);

//Point routes
//edit does this need to exist?
router.get('/:id/edit', edit);
router.post('/:id', pointPage);

//delete
router.post('/:id/delete', del);
router.get('/pointHistory', pointHistory);