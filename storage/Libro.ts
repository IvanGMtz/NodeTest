import con from "../server/connection.js";
import { Expose, Type, Transform } from 'class-transformer';
import { IsDefined, MaxLength, MinLength, IsNumber, IsEmail, IsString } from 'class-validator';

export class Libros {

    // `id_libro` int(11) NOT NULL,
    // `id_autor` int(11) DEFAULT NULL,
    // `id_categoria` int(11) DEFAULT NULL,
    // `id_editorial` int(11) DEFAULT NULL,
    // `titulo` varchar(255) DEFAULT NULL,
    // `anio_publicacion` int(11) DEFAULT NULL,
    // `isbn` varchar(20) DEFAULT NULL,
    // `num_paginas` int(11) DEFAULT NULL,
    // `id_estado` int(11) DEFAULT NULL

    @Expose({ name: 'id' })
    @IsNumber({}, {message: ()=>{ throw {status: 406, message: `El Libro id no cumple con el formato`}}})
    @IsDefined({message: ()=>{ throw {status: 422, message: `El parametro id es obligatorio`}}})
    id_libro: number;

    @Expose({ name: 'id-autor' })
    @IsNumber({}, {message: ()=>{ throw {status: 406, message: `El id-autor no cumple con el formato`}}})
    @IsDefined({message: ()=>{ throw {status: 422, message: `El parametro id-autor obligatorio`}}})
    id_autor: number;
    
    @Expose({ name: 'id-categoria' })
    @IsNumber({}, {message: ()=>{ throw {status: 406, message: `El id-categoria no cumple con el formato`}}})
    @IsDefined({message: ()=>{ throw {status: 422, message: `El parametro id-categoria es obligatorio`}}})
    id_categoria: number;

    @Expose({ name: 'id-editorial' })
    @IsNumber({}, {message: ()=>{ throw {status: 406, message: `El id-editorial' no cumple con el formato`}}})
    @IsDefined({message: ()=>{ throw {status: 422, message: `El parametro id-editorial es obligatorio`}}})
    id_editorial: number;

    @Expose({ name: 'titulo-libro' })
    @Transform(({ value }) => { if(/^[a-zA-Z0-9\s]*$/.test(value)) return (value) ? value :"Libro" ; else throw {status: 406, message: `El datos titulo-libro no cumple con los parametros acordados`};}, { toClassOnly: true })
    titulo: string;
     
    @Expose({ name: 'año-publicacion' })
    @Transform(({ value }) => { if(/^[0-9]|undefined+$/g.test(value)) return (value) ? value :2023 ; else throw {status: 406, message: `El datos año-publicacion no cumple con los parametros acordados`};}, { toClassOnly: true })
    anio_publicacion: number;

    @Expose({ name: 'isbn' })
    @Transform(({ value }) => { if(/^[a-zA-Z0-9\s]|undefined|-*$/.test(value)) return value ; else throw {status: 400, message: `El datos isbn no cumple con los parametros acordados y es obligatorio`};}, { toClassOnly: true })
    isbn: string;

    @Expose({ name: 'num_paginas' })
    @IsNumber({}, {message: ()=>{ throw {status: 406, message: `El num_paginas no cumple con el formato`}}})
    num_paginas: number;

    @Expose({ name: 'id_estado' })
    @IsNumber({}, {message: ()=>{ throw {status: 406, message: `El id_estado no cumple con el formato`}}})
    @IsDefined({message: ()=>{ throw {status: 422, message: `El parametro id_estado es obligatorio`}}})
    id_estado: number;

    constructor(IDL: number,IDA: number,IDC: number,IDE: number,TITLE: string,ANIO: number,ISBN: string,PAGES: number,IDSTATE: number) {
      this.id_libro = IDL;
      this.id_autor = IDA;
      this.id_categoria = IDC;
      this.id_editorial= IDE;
      this.titulo = TITLE;
      this.anio_publicacion = ANIO;
      this.isbn = ISBN;
      this.num_paginas = PAGES;
      this.id_estado = IDSTATE;

    }

    // get guardar(){
    //   con.query(/*sql*/`SELECT * FROM libro`,
    //   (err, data, fields)=>{
    //     console.log(data);
    //   })
    //   return "";
    // }
}