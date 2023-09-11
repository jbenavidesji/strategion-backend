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
const consumCurrentRoute = require('./src/routes/consum-current');
const consumEnergyGermanyRoute = require('./src/routes/consum-energy-germany');
const consumMeasurementsRoute = require('./src/routes/consum-measurements');
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
app.use('/consumCurrent', consumCurrentRoute);
app.use('/consumEnergyGermany',consumEnergyGermanyRoute);
app.use('/consumMeasurements', consumMeasurementsRoute);
app.use('/energyGermany', energyGermanyRoute);
app.use('/energyProvider',energyProviderRoute);
app.use('/hints', hintsRoute);
app.use('/notifications', notificationsRoute);
app.use('/savings',savingsRoute);


app.listen(5000, () => {
    console.log(`App running on port 5000`)
})

module.exports = app;

