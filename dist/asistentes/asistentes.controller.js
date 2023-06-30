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
exports.AsistentesController = void 0;
const common_1 = require("@nestjs/common");
const create_asistente_dto_1 = require("./dto/create-asistente.dto");
const asistentes_service_1 = require("./asistentes.service");
const update_asistente_dto_1 = require("./dto/update-asistente.dto");
let AsistentesController = exports.AsistentesController = class AsistentesController {
    constructor(asistentesService) {
        this.asistentesService = asistentesService;
    }
    getAsistentes() {
        return this.asistentesService.getAsistentes();
    }
    getAsistente(id) {
        return this.asistentesService.getAsistente(id);
    }
    createAsistente(newAsistente) {
        return this.asistentesService.createAsistente(newAsistente);
    }
    deleteAsistente(id) {
        return this.asistentesService.deleteAsistente(id);
    }
    updateAsistente(id, asistente) {
        return this.asistentesService.updateAsistente(id, asistente);
    }
};
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], AsistentesController.prototype, "getAsistentes", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], AsistentesController.prototype, "getAsistente", null);
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_asistente_dto_1.CreateAsistenteDto]),
    __metadata("design:returntype", Promise)
], AsistentesController.prototype, "createAsistente", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], AsistentesController.prototype, "deleteAsistente", null);
__decorate([
    (0, common_1.Patch)(':id'),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, update_asistente_dto_1.UpdateAsistenteDto]),
    __metadata("design:returntype", void 0)
], AsistentesController.prototype, "updateAsistente", null);
exports.AsistentesController = AsistentesController = __decorate([
    (0, common_1.Controller)('asistentes'),
    __metadata("design:paramtypes", [asistentes_service_1.AsistentesService])
], AsistentesController);
//# sourceMappingURL=asistentes.controller.js.map