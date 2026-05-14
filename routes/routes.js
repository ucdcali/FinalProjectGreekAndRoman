import express from 'express';

import { loadPage, addPoint, pointHistory} from '../controllers/pointControllers.js';
import { loadEvents, adminEvents, addEvent, deleteEvent, studentEvents} from '../controllers/eventControllers.js';
import { adminEnter, adminLoad, editEnter, login } from '../controllers/adminControllers.js';
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
router.get('/adminLoad', adminLoad);
router.get('/editEnter', requireAuth, editEnter);


//Point routes
router.post("/addPoint", addPoint);
router.get('/pointHistory', pointHistory);