import express from "express";
import morgan from "morgan"

import productRoutes from "./routes/index.routes"

const app = express();

/**Se setiea el puerto en el que correa nuestro server */
app.set("port",4000);

/**Aqui nosotros declaramos que hacemos uso de Middlewares */
app.use(morgan("dev"));
app.use(express.json());

/** Iportamos nuestras rutas de la API (endpons) de products.routes*/ 
app.use("/api-restful/productos",productRoutes);

export default app;

