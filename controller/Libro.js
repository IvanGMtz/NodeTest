var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Expose, Transform } from 'class-transformer';
import { IsDefined, IsNumber } from 'class-validator';
export class Libros {
    constructor(IDL, IDA, IDC, IDE, TITLE, ANIO, ISBN, PAGES, IDSTATE) {
        this.id_libro = IDL;
        this.id_autor = IDA;
        this.id_categoria = IDC;
        this.id_editorial = IDE;
        this.titulo = TITLE;
        this.anio_publicacion = ANIO;
        this.isbn = ISBN;
        this.num_paginas = PAGES;
        this.id_estado = IDSTATE;
    }
}
__decorate([
    Expose({ name: 'id' }),
    IsNumber({}, { message: () => { throw { status: 406, message: `El Libro id no cumple con el formato` }; } }),
    IsDefined({ message: () => { throw { status: 422, message: `El parametro id es obligatorio` }; } }),
    __metadata("design:type", Number)
], Libros.prototype, "id_libro", void 0);
__decorate([
    Expose({ name: 'id-autor' }),
    IsNumber({}, { message: () => { throw { status: 406, message: `El id-autor no cumple con el formato` }; } }),
    IsDefined({ message: () => { throw { status: 422, message: `El parametro id-autor obligatorio` }; } }),
    __metadata("design:type", Number)
], Libros.prototype, "id_autor", void 0);
__decorate([
    Expose({ name: 'id-categoria' }),
    IsNumber({}, { message: () => { throw { status: 406, message: `El id-categoria no cumple con el formato` }; } }),
    IsDefined({ message: () => { throw { status: 422, message: `El parametro id-categoria es obligatorio` }; } }),
    __metadata("design:type", Number)
], Libros.prototype, "id_categoria", void 0);
__decorate([
    Expose({ name: 'id-editorial' }),
    IsNumber({}, { message: () => { throw { status: 406, message: `El id-editorial' no cumple con el formato` }; } }),
    IsDefined({ message: () => { throw { status: 422, message: `El parametro id-editorial es obligatorio` }; } }),
    __metadata("design:type", Number)
], Libros.prototype, "id_editorial", void 0);
__decorate([
    Expose({ name: 'titulo-libro' }),
    Transform(({ value }) => { if (/^[a-zA-Z0-9\s]*$/.test(value))
        return (value) ? value : "Libro";
    else
        throw { status: 406, message: `El datos titulo-libro no cumple con los parametros acordados` }; }, { toClassOnly: true }),
    __metadata("design:type", String)
], Libros.prototype, "titulo", void 0);
__decorate([
    Expose({ name: 'año-publicacion' }),
    Transform(({ value }) => { if (/^[0-9]|undefined+$/g.test(value))
        return (value) ? value : 2023;
    else
        throw { status: 406, message: `El datos año-publicacion no cumple con los parametros acordados` }; }, { toClassOnly: true }),
    __metadata("design:type", Number)
], Libros.prototype, "anio_publicacion", void 0);
__decorate([
    Expose({ name: 'isbn' }),
    Transform(({ value }) => { if (/^[a-zA-Z0-9\s]|undefined|-*$/.test(value))
        return value;
    else
        throw { status: 400, message: `El datos isbn no cumple con los parametros acordados y es obligatorio` }; }, { toClassOnly: true }),
    __metadata("design:type", String)
], Libros.prototype, "isbn", void 0);
__decorate([
    Expose({ name: 'num_paginas' }),
    IsNumber({}, { message: () => { throw { status: 406, message: `El num_paginas no cumple con el formato` }; } }),
    __metadata("design:type", Number)
], Libros.prototype, "num_paginas", void 0);
__decorate([
    Expose({ name: 'id_estado' }),
    IsNumber({}, { message: () => { throw { status: 406, message: `El id_estado no cumple con el formato` }; } }),
    IsDefined({ message: () => { throw { status: 422, message: `El parametro id_estado es obligatorio` }; } }),
    __metadata("design:type", Number)
], Libros.prototype, "id_estado", void 0);
