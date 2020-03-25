import express, {json} from 'express'

const app = express();

// Routes
import IndexRoutes from './routes/index.routes'
import TaskRoutes from './routes/tasks.routes'

// Setting
app.set('port', process.env.PORT || 8080);

// Middlewares 
app.use(json());

// Routes 
app.use(IndexRoutes);
app.use('/task',TaskRoutes);

export default app;