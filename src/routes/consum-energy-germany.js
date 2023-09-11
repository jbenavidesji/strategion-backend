const express = require('express');
const pool = require("../../db");
const router = express.Router();
router.get('', async (req, res) => {
    try {
        const allConsumEnergyGermany = await pool.query('SELECT * FROM tb_consum_energy_germany');
        res.json(allConsumEnergyGermany.rows);
    } catch (err) {
        console.error(err.message);
    }
});

module.exports = router;