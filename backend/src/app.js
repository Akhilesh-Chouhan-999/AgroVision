import express from 'express' ; 
import cors from 'cors' ; 
import helmet from 'helmet' ; 
import morgan from 'morgan' ; 
import errorHandler from './middlewares/error.middleware.js';
import authRoutes from './routes/auth.routes.js' ;
import cropRoutes from './routes/crop.route.js' ; 
import diseaseRoutes from './routes/disease.routes.js' ;
import predictionRoutes from './routes/prediction.route.js';

const app = express() ; 

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());
app.use(helmet());
app.use(morgan("dev"));
app.use('/api/v1/auth' , authRoutes) ;
app.use('/api/v1/crops' , cropRoutes)  ;
app.use('/api/v1/diseases' , diseaseRoutes) ; 
app.use("/api/v1/predictions", predictionRoutes);
app.use(errorHandler) ;


export default app ; 
