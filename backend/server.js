import app from './app.js';
import dotenv from './config/dotenv.js';
import db from './config/db.js';

const { port } = dotenv;

async function startServer() {
    try {
        await db.connectDb();
        app.listen(port, () => {
            console.log(`Example app listening on port ${port}`);
        });
    } catch (err) {
        console.error("Failed to connect to DB:", err);
        process.exit(1);
    }
}

startServer();