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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AsistentesService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const asistente_entity_1 = require("./asistente.entity");
const typeorm_2 = require("typeorm");
let AsistentesService = exports.AsistentesService = class AsistentesService {
    constructor(asistenteRepository) {
        this.asistenteRepository = asistenteRepository;
    }
    createAsistente(asistente) {
        const newAsistente = this.asistenteRepository.create(asistente);
        return this.asistenteRepository.save(newAsistente);
    }
    getAsistentes() {
        return this.asistenteRepository.find();
    }
    getAsistente(id) {
        return this.asistenteRepository.findOne({
            where: {
                id
            }
        });
    }
    deleteAsistente(id) {
        return this.asistenteRepository.delete({ id });
    }
    updateAsistente(id, asistente) {
        return this.asistenteRepository.update({ id }, asistente);
    }
};
exports.AsistentesService = AsistentesService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(asistente_entity_1.Asistente)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], AsistentesService);
//# sourceMappingURL=asistentes.service.js.map