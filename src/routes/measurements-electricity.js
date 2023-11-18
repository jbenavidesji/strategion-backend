const express = require('express');
const pool = require("../../db");
const router = express.Router();
router.get('', async (req, res) => {
    try {
        const allMeasurementsElectricity = await pool.query('SELECT * FROM tb_measurements_electricity');
        res.json(allMeasurementsElectricity.rows);
    } catch (err) {
        console.error(err.message);
    }
});

module.exports = router;