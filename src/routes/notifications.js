const express = require('express');
const pool = require("../../db");
const router = express.Router();
router.get('', async (req, res) => {
    try {
        const allNotifications = await pool.query('SELECT * FROM tb_notifications');
        res.json(allNotifications.rows);
    } catch (err) {
        console.error(err.message);
    }
});

module.exports = router;