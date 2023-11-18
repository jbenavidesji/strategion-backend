const express = require('express');
const pool = require("../../db");
const router = express.Router();
router.get('', async (req, res) => {
    try {
        const allUsers = await pool.query('SELECT * FROM tb_users');
        res.json(allUsers.rows);
    } catch (err) {
        console.error(err.message);
    }
});

module.exports = router;