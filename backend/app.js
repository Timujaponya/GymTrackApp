// ...existing code...
import express from 'express';
import exercises from "./routes/exercises.js";
import measurements from "./routes/measurements.js";
import plans from "./routes/plans.js";
import users from "./routes/users.js";
import muscleGroups from "./routes/muscleGroups.js";
import equipments from "./routes/equipments.js";
import errorHandler from "./middleware/errorHandler.js";
import cors from 'cors'; // EKLE

const app = express();

app.use(cors()); // EKLE
app.use(express.json());
// ...existing code...

// register routes BEFORE the error handler
app.use('/equipments', equipments);
app.use('/muscle-groups', muscleGroups);
app.use('/exercises', exercises);
app.use('/measurements', measurements);
app.use('/plans', plans);
app.use('/users', users);

// move error handler to the end (after all routes)
app.use(errorHandler);

export default app;
// ...existing code...