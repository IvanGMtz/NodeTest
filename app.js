import express from "express";
import dotenv from "dotenv";
import appAutor from "./routers/autor.js";
import appLibro from "./routers/libros.js";

dotenv.config();
const appExpress = express();
appExpress.use(express.json());

appExpress.use("/autor", appAutor);
appExpress.use("/libros", appLibro);

let config = JSON.parse(process.env.MY_SERVER);
appExpress.listen(config, ()=>{
    console.log(`http://${config.hostname}:${config.port}`);
});