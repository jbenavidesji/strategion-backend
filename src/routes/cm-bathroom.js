const express = require('express');
const pool = require("../../db");
const router = express.Router();
router.get('', async (req, res) => {
    try {
        const allConsumeCurrent = await pool.query('SELECT * FROM tb_cm_bathroom ORDER BY id_cm_bathroom ASC');
        res.json(allConsumeCurrent.rows);
    } catch (err) {
        console.error(err.message);
    }
});

module.exports = router;