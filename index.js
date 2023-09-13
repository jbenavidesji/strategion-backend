const express = require('express');
const app = express();
const cors = require("cors");

app.use(cors());
app.use(express.json()); //req.body

/**
 * >> Routes <<
 * This section contains definitions for API routes
 */

const authRoute = require('./src/routes/auth');
const consumeCurrentRoute = require('./src/routes/consume-current');
const consumeEnergyGermanyRoute = require('./src/routes/consume-energy-germany');
const consumeMeasurementsRoute = require('./src/routes/consume-measurements');
const energyGermanyRoute = require('./src/routes/energy-germany');
const energyProviderRoute = require('./src/routes/energy-provider');
const hintsRoute = require('./src/routes/hints');
const notificationsRoute = require('./src/routes/notifications');
const savingsRoute = require('./src/routes/savings');


/**
 * >> Route Allocation <<
 * In this section, route definitions are allocated to the actual routes
 */


app.use('/auth', authRoute);
app.use('/consume-current', consumeCurrentRoute);
app.use('/consume-energy-germany',consumeEnergyGermanyRoute);
app.use('/consume-measurements', consumeMeasurementsRoute);
app.use('/energy-germany', energyGermanyRoute);
app.use('/energy-provider',energyProviderRoute);
app.use('/hints', hintsRoute);
app.use('/notifications', notificationsRoute);
app.use('/savings',savingsRoute);


app.listen(5000, () => {
    console.log(`App running on port 5000`)
})

module.exports = app;

