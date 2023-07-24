import { Router } from "express";
import con from "../server/connection.js";
import proxyLibrary from '../middleware/proxyLibro.js';
const appLibro = Router();


appLibro.post("/", proxyLibrary,  (req, res) => {
    console.log(req.body.guardar);
    con.query(
        /*sql*/ `INSERT INTO libro SET ?`,
        req.body,
        (err,data,fils)=>{
            console.log(err);
            data.affectedRows+=200;
            let result = req.body;
            result.id= data.insertId;
            res.status(data.affectedRows).send(result);
        }
    );
})

appLibro.get("/", (req, res) => {
    con.query(
        /*sql*/ `SELECT * FROM libro`,
        req.body,
        (err,data,fils)=>{
            console.log(err);
            console.log(fils);
            res.send(data)
        }
    );
})

appLibro.put("/:id", proxyLibrary, (req, res) => {
    con.query(
        /*sql*/ `UPDATE libro SET ? WHERE id_libro= ?`,
        [req.body, req.params.id],
        (err,data,fils)=>{
            console.log(err);
            console.log(fils);
            res.send(data)
        }
    );
})

appLibro.delete("/:id", (req, res) => {
    con.query(
        /*sql*/ `DELETE FROM libro WHERE id_libro= ?`,
        req.params.id,
        (err,data,fils)=>{
            console.log(err);
            console.log(fils);
            res.send(data)
        }
    );
})



export default appLibro;