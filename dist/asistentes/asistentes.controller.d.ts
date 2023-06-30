import { CreateAsistenteDto } from './dto/create-asistente.dto';
import { AsistentesService } from './asistentes.service';
import { Asistente } from './asistente.entity';
import { UpdateAsistenteDto } from './dto/update-asistente.dto';
export declare class AsistentesController {
    private asistentesService;
    constructor(asistentesService: AsistentesService);
    getAsistentes(): Promise<Asistente[]>;
    getAsistente(id: number): Promise<Asistente>;
    createAsistente(newAsistente: CreateAsistenteDto): Promise<Asistente>;
    deleteAsistente(id: number): Promise<import("typeorm").DeleteResult>;
    updateAsistente(id: number, asistente: UpdateAsistenteDto): Promise<import("typeorm").UpdateResult>;
}
