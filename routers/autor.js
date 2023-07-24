import { Router } from "express";
import con from "../server/connection.js";
const appAutor = Router();


appAutor.post("/", (req, res) => {
    con.query(
        /*sql*/ `INSERT INTO autor SET ?`,
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

appAutor.get("/", (req, res) => {
    con.query(
        /*sql*/ `SELECT * FROM autor`,
        req.body,
        (err,data,fils)=>{
            console.log(err);
            console.log(fils);
            res.send(data)
        }
    );
})

appAutor.put("/:id", (req, res) => {
    con.query(
        /*sql*/ `UPDATE autor SET ? WHERE id= ?`,
        [req.body, req.params.id],
        (err,data,fils)=>{
            console.log(err);
            console.log(fils);
            res.send(data)
        }
    );
})

appAutor.delete("/:id", (req, res) => {
    con.query(
        /*sql*/ `DELETE FROM autor WHERE id= ?`,
        req.params.id,
        (err,data,fils)=>{
            console.log(err);
            console.log(fils);
            res.send(data)
        }
    );
})



export default appAutor;