import express from 'express';
import exercises from "./routes/exercises.js";
import measurements from "./routes/measurements.js";
import plans from "./routes/plans.js";
import users from "./routes/users.js";
import muscleGroups from "./routes/muscleGroups.js";
import equipments from "./routes/equipments.js";
import errorHandler from "./middleware/errorHandler.js";

const app = express();


app.use(express.json());
app.use(errorHandler);


app.use('/equipments', equipments);
app.use('/muscle-groups', muscleGroups);
app.use('/exercises', exercises);
app.use('/measurements', measurements);
app.use('/plans', plans);
app.use('/users', users);



export default app;