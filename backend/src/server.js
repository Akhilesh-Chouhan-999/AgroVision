import app from './app.js';
import dotenv from 'dotenv';
import connectDB from "./configs/db.config.js";


dotenv.config();

const PORT = process.env.PORT || 5000;


const startServer = async () => {
    try {

        await connectDB();

        app.listen(PORT, () => {
            console.log(`Server is listening on PORT ${PORT}`);
        });

    }
    catch (error) {

        console.log(`Server startUp Failed`, error);
        process.exit(1);

    }
}

startServer();

