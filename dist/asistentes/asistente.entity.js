"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Asistente = void 0;
const typeorm_1 = require("typeorm");
let Asistente = exports.Asistente = class Asistente {
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], Asistente.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({
        type: "varchar",
        length: 100
    }),
    __metadata("design:type", String)
], Asistente.prototype, "nombre", void 0);
__decorate([
    (0, typeorm_1.Column)({
        type: "varchar",
        length: 9
    }),
    __metadata("design:type", String)
], Asistente.prototype, "tipoDocumento", void 0);
__decorate([
    (0, typeorm_1.Column)({
        type: "varchar",
        length: 30,
        unique: true
    }),
    __metadata("design:type", String)
], Asistente.prototype, "numeroDocumento", void 0);
__decorate([
    (0, typeorm_1.Column)({
        type: "varchar",
        length: 10
    }),
    __metadata("design:type", String)
], Asistente.prototype, "telefonoMovil", void 0);
__decorate([
    (0, typeorm_1.Column)({
        type: "varchar",
        length: 100
    }),
    __metadata("design:type", String)
], Asistente.prototype, "email", void 0);
exports.Asistente = Asistente = __decorate([
    (0, typeorm_1.Entity)({ name: 'asistentes' })
], Asistente);
//# sourceMappingURL=asistente.entity.js.map