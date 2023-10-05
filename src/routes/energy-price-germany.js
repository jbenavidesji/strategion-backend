const express = require('express');
const pool = require("../../db");
const router = express.Router();
router.get('', async (req, res) => {
    try {
        const allEnergyGermany = await pool.query('SELECT * FROM tb_energy_price_germany ORDER BY id_energy_price_germany ASC ');
        res.json(allEnergyGermany.rows);
    } catch (err) {
        console.error(err.message);
    }
});

module.exports = router;