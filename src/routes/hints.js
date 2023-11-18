const express = require('express');
const pool = require("../../db");
const router = express.Router();
router.get('', async (req, res) => {
    try {
        const allHints = await pool.query('SELECT * FROM tb_hints');
        res.json(allHints.rows);
    } catch (err) {
        console.error(err.message);
    }
});

module.exports = router;