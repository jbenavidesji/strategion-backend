const express = require('express');
const pool = require("../../db");
const router = express.Router();
router.get('', async (req, res) => {
    try {
        const allConsumCurrent = await pool.query('SELECT * FROM tb_consum_current');
        res.json(allConsumCurrent.rows);
    } catch (err) {
        console.error(err.message);
    }
});

module.exports = router;