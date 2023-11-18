const express = require('express');
const pool = require("../../db");
const router = express.Router();
router.get('', async (req, res) => {
    try {
        const allEnergyProvider = await pool.query('SELECT * FROM tb_energy_provider');
        res.json(allEnergyProvider.rows);
    } catch (err) {
        console.error(err.message);
    }
});

module.exports = router;