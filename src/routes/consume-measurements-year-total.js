const express = require('express');
const pool = require("../../db");
const router = express.Router();
router.get('', async (req, res) => {
    try {
        const allConsumeMeasurements = await pool.query('SELECT * FROM tb_consume_measurements_year_total');
        res.json(allConsumeMeasurements.rows);
    } catch (err) {
        console.error(err.message);
    }
});

module.exports = router;