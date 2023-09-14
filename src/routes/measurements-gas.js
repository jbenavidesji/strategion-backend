const express = require('express');
const pool = require("../../db");
const router = express.Router();
router.get('', async (req, res) => {
    try {
        const allConsumMeasurements = await pool.query('SELECT * FROM tb_measurements-gas');
        res.json(allConsumMeasurements.rows);
    } catch (err) {
        console.error(err.message);
    }
});

module.exports = router;