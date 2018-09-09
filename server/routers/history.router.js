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

module.exports = router;
