import Point from '../models/Point.js';

export const adminEnter = async (req, res)=> {
    try {
        const {key} = req.body;

        if (!key) {
            console.log(key);
            return res.send("Field not filled");
        }

        if(key === "bobTheSled") {
            const points = await Point.find();
            let greekPoints = 0;
            let romanPoints = 0;
            points.forEach(p => {
            if (p.team === "greek"){
                greekPoints += p.pointNum;
            }   
            else if (p.team === "roman") {
                romanPoints += p.pointNum;
            }
            });
            res.render('admin', {
                title: "Greek and Roman Points!",
                greekPoints,
                romanPoints,
                summary: {
                    total: points.length
                }
            });
        }
        else{
            res.redirect('/')
        }

    } catch (error) {
        console.error("Error loading", error);
        res.status(500).send("Fix urself");
    }
};

export const editEnter = async (req, res)=> {
    try {
        const points = await Point.find();
        let greekPoints = 0;
        let romanPoints = 0;
        points.forEach(p => {
         if (p.team === "greek"){
            greekPoints += p.pointNum;
         }   
         else if (p.team === "roman") {
            romanPoints += p.pointNum;
         }
        });

        //res.json(greekPoints,romanPoints);

        res.render('edit', {
            greekPoints,
            romanPoints,
            summary: {
                total: points.length
            }
        });
    } catch (error) {
        console.error("Error loading", error);
        res.status(500).send("Fix urself");
    }
};

export const login = async (req, res)=> {
    res.render('login');
};