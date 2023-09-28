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
const cmBathroomRoute = require('./src/routes/cm-bathroom');
const cmBedroomRoute = require('./src/routes/cm-bedroom');
const cmBedroom2Route = require('./src/routes/cm-bedroom-2');
const cmHallwayRoute = require('./src/routes/cm-hallway');
const cmKitchenRoute = require('./src/routes/cm-kitchen');
const cmLivingroomRoute = require('./src/routes/cm-livingroom');
const cmLivingroom2Route = require('./src/routes/cm-livingroom-2');
const cmWintergardenRoute = require('./src/routes/cm-wintergarden');
const consumeCurrentRoute = require('./src/routes/consume-current');
const consumeEnergyGermanyRoute = require('./src/routes/consume-energy-germany');
const consumeMeasurementsRoute = require('./src/routes/consume-measurements');
const consumeMeasurementsYearTotalRoute = require('./src/routes/consume-measurements-year-total');
const energyConsumeCityCO2Route = require('./src/routes/energy-consume-city-co2');
const energyConsumeCityHomeRoute = require('./src/routes/energy-consume-city-home');
const energyConsumeCityTotalRoute = require('./src/routes/energy-consume-city-total');
const energyGermanyRoute = require('./src/routes/energy-germany');
const energyProviderRoute = require('./src/routes/energy-provider');
const hintsRoute = require('./src/routes/hints');
const measurementsElectricityRoute = require('./src/routes/measurements-electricity');
const measurementsGasRoute = require('./src/routes/measurements-gas');
const measurementsSolarRoute = require('./src/routes/measurements-solar');
const measurementsTypeTotal = require('./src/routes/measurements-type-total');
const notificationsRoute = require('./src/routes/notifications');
const roomActionsRoute = require('./src/routes/room-actions');
const roomHeatingProgramsRoute = require('./src/routes/room-heating-programs');
const roomInformationRoute = require('./src/routes/room-information');
const roomMeasurementsRoute = require('./src/routes/room-measurements');
const savingsRoute = require('./src/routes/savings');
const savingsTotalRoute = require('./src/routes/savings-total');




/**
 * >> Route Allocation <<
 * In this section, route definitions are allocated to the actual routes
 */


app.use('/auth', authRoute);
app.use('/cm-bathroom', cmBathroomRoute);
app.use('/cm-bedroom', cmBedroomRoute);
app.use('/cm-bedroom-2', cmBedroom2Route);
app.use('/cm-hallway', cmHallwayRoute);
app.use('/cm-kitchen', cmKitchenRoute);
app.use('/cm-livingroom', cmLivingroomRoute);
app.use('/cm-livingroom-2', cmLivingroom2Route);
app.use('/cm-wintergarden', cmWintergardenRoute);
app.use('/consume-current', consumeCurrentRoute);
app.use('/consume-energy-germany',consumeEnergyGermanyRoute);
app.use('/consume-measurements', consumeMeasurementsRoute);
app.use('/consume-measurements-year-total', consumeMeasurementsYearTotalRoute);
app.use('/energy-consume-city-co2', energyConsumeCityCO2Route);
app.use('/energy-consume-city-home', energyConsumeCityHomeRoute);
app.use('/energy-consume-city-total', energyConsumeCityTotalRoute);
app.use('/energy-germany', energyGermanyRoute);
app.use('/energy-provider',energyProviderRoute);
app.use('/hints', hintsRoute);
app.use('/measurements-electricity', measurementsElectricityRoute)
app.use('/measurements-gas', measurementsGasRoute)
app.use('/measurements-solar', measurementsSolarRoute)
app.use('/measurements-type-total', measurementsTypeTotal)
app.use('/notifications', notificationsRoute);
app.use('/room-actions', roomActionsRoute);
app.use('/room-heating-programs', roomHeatingProgramsRoute);
app.use('/room-information', roomInformationRoute);
app.use('/room-measurements', roomMeasurementsRoute);
app.use('/savings',savingsRoute);
app.use('/savings-total',savingsTotalRoute);

app.listen(5000, () => {
    console.log(`App running on port 5000`)
})

module.exports = app;

