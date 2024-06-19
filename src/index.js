/*
import express from "express"
import { PORT , HOST } from "./config/configEnv.js"
import { connectDB } from './config/configDB.js';
import indexRoutes from "./routes/index.routes.js"

const app = express();

app.use(express.json());

app.use("/api",indexRoutes);

app.listen(PORT,  () => {
    console.log(`servidor corriendo en http://${HOST}:${PORT}`);
    connectDB;
});
*/
import express from 'express';
import mongoose from 'mongoose';
import routes from './routes/index.routes.js';
import { DB_URL } from './config/configEnv.js';
const app = express();
const PORT = process.env.PORT || 3000;

// Middleware para parsear JSON
app.use(express.json());

// Rutas
app.use('/api', routes);

// Conectar a MongoDB
const mongoUri = DB_URL;
mongoose.connect(mongoUri, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => {
    console.log('Conectado a MongoDB');
    app.listen(PORT, () => {
        console.log(`El servidor está corriendo en el puerto ${PORT}`);
    });
}).catch((error) => {
    console.error('Error al conectar a MongoDB:', error);
});