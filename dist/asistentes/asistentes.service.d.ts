import { Asistente } from './asistente.entity';
import { Repository } from 'typeorm';
import { CreateAsistenteDto } from './dto/create-asistente.dto';
import { UpdateAsistenteDto } from './dto/update-asistente.dto';
export declare class AsistentesService {
    private asistenteRepository;
    constructor(asistenteRepository: Repository<Asistente>);
    createAsistente(asistente: CreateAsistenteDto): Promise<Asistente>;
    getAsistentes(): Promise<Asistente[]>;
    getAsistente(id: number): Promise<Asistente>;
    deleteAsistente(id: number): Promise<import("typeorm").DeleteResult>;
    updateAsistente(id: number, asistente: UpdateAsistenteDto): Promise<import("typeorm").UpdateResult>;
}
