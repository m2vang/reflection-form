const express = require('express');
const router = express.Router();
const pool = require('../modules/pool');

router.get('/', (req, res) => {
    console.log('in GET-addHistory route');
    const query = `SELECT * FROM "feedback"
                    ORDER BY date DESC;`;
    pool.query(query)
    .then((results) => {
        console.log(results);
        res.send(results.rows);
    }).catch((error) => {
        console.log('error in GET-addHistory route');
        res.sendStatus(500);
    });
}); //end of GET

router.post('/', (req, res) => {
    console.log('in POST route', req.body);
    const newFeedback = req.body;
    const query = `INSERT INTO "feedback" ("feeling", "understanding", "support", "comments")
                    VALUES ($1, $2, $3, $4);`;
    pool.query(query, [newFeedback.feeling, newFeedback.understanding, 
                        newFeedback.support, newFeedback.comments])
    .then((results) => {
        console.log(results);
        res.sendStatus(200);
    }).catch((error) => {
        console.log('error in POST', error);
        res.sendStatus(500);
    });
}); //end of POST

module.exports = router;
