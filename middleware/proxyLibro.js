import express from 'express';
import 'reflect-metadata';
import {plainToClass} from 'class-transformer';
import {Libros} from '../controller/Libro.js';
import {validate} from 'class-validator';

const proxyLibrary = express();
proxyLibrary.use(async(req,res,next)=>{
    try {
        let data = plainToClass(Libros, req.body, { excludeExtraneousValues: true });
        req.body = data;
        await validate(data);
        next();
    } catch (err) {
        res.status(err.status).json(err);
    }
})

export default proxyLibrary;