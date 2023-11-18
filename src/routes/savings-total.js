const express = require('express');
const pool = require("../../db");
const router = express.Router();
router.get('', async (req, res) => {
    try {
        const allSavings = await pool.query('SELECT * FROM tb_savings_total');
        res.json(allSavings.rows);
    } catch (err) {
        console.error(err.message);
    }
});

module.exports = router;