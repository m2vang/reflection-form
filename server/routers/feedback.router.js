const express = require('express');
const router = express.Router();
const pool = require('../modules/pool');

router.get('/', (req, res) => {
    console.log('in GET route');
    const query = `SELECT * FROM "feedback"
                    ORDER BY id DESC;`;
    pool.query(query)
    .then((results) => {
        res.send(results.rows);
    }).catch((error) => {
        console.log('error in GET route');
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
        res.sendStatus(200);
    }).catch((error) => {
        console.log('error in POST route', error);
        res.sendStatus(500);
    });
}); //end of POST

router.delete('/:id', (req, res) => {
    console.log('in DELETE route', req.params.id);
    const idToDelete = req.params.id;
    const query = `DELETE FROM "feedback" WHERE "id" = $1;`;
    pool.query(query, [idToDelete])
    .then((results) => {
        res.sendStatus(200);
    }).catch((error) => {
        console.log('error in DELETE route');
        res.sendStatus(500);
    });
}); //end of DELETE

router.put('/:feedback', (req, res) => {
    console.log('in PUT route', req.body);
    const newFlagged = req.body;
    const query = `UPDATE "feedback" SET "flagged" = $1 WHERE "id" = $2;`;
    pool.query(query, [!newFlagged.flagged, newFlagged.id])
    .then((results) => {
        res.sendStatus(200);
    }).catch((error) => {
        console.log('error in PUT:id', error);
        res.sendStatus(500);
    });
}); //end of POST:id

module.exports = router;
