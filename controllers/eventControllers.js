import Event from '../models/Event.js';

export const loadEvents = async (req, res)=> {
    try {
        const events = await Event.find().sort({ date: 1 });
        res.render('studentEvents', {
            events
        });
    } catch (error) {
        console.error("Error loading", error);
        res.status(500).send("Fix urself");
    }
};
export const adminEvents = async (req, res) => {
    try {
        const events = await Event.find().sort({ date: 1 });
        res.render('adminEvents', {
            events
        });

    } catch (error) {
        console.error(error);
        res.status(500).send('Error loading admin events');
    }
};

export const addEvent = async (req, res) => {
    try {
        const { name, message, date } = req.body;
        await Event.create({
            name,
            message: message,
            date
        });
        res.redirect('/adminEvents');
    } catch (err) {
        console.log(err);
        res.status(500).send('Error adding event');
    }
};
export const deleteEvent = async (req, res) => {
    try {
        await Event.findByIdAndDelete(req.params.id);

        res.redirect('/adminEvents');

    } catch (err) {
        console.log(err);
        res.status(500).send('Error deleting event');
    }
};
export const studentEvents = async (req, res) => {
    try {
        const events = await Event.find().sort({ date: 1 });
        res.render('studentEvents', {
            events
        });

    } catch (error) {
        console.error(error);
        res.status(500).send('Error loading student events');
    }
};


