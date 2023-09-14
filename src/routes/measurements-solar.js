const express = require('express');
const pool = require("../../db");
const router = express.Router();
router.get('', async (req, res) => {
    try {
        const allMeasurementsSolar = await pool.query('SELECT * FROM tb_measurements-solar');
        res.json(allMeasurementsSolar.rows);
    } catch (err) {
        console.error(err.message);
    }
});

module.exports = router;