const express = require('express');
const pool = require("../../db");
const router = express.Router();
router.get('', async (req, res) => {
    try {
        const allMeasurementsGas = await pool.query('SELECT * FROM tb_measurements_gas');
        res.json(allMeasurementsGas.rows);
    } catch (err) {
        console.error(err.message);
    }
});

module.exports = router;