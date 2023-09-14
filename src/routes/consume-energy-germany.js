const express = require('express');
const pool = require("../../db");
const router = express.Router();
router.get('', async (req, res) => {
    try {
        const allConsumeEnergyGermany = await pool.query('SELECT * FROM tb_consume_energy_germany');
        res.json(allConsumeEnergyGermany.rows);
    } catch (err) {
        console.error(err.message);
    }
});

module.exports = router;