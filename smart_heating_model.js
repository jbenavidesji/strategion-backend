const Pool = require('pg').Pool
const pool = new Pool({
    user: 'admin',
    host: 'localhost',
    database: 'db_smart_heating',
    password: 'root',
    port: 5432,
});