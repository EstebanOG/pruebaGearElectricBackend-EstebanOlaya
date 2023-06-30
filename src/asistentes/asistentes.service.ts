import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Asistente } from './asistente.entity';
import { Repository } from 'typeorm';
import { CreateAsistenteDto } from './dto/create-asistente.dto'
import { UpdateAsistenteDto } from './dto/update-asistente.dto'

@Injectable()
export class AsistentesService {
    constructor(@InjectRepository(Asistente) private asistenteRepository: Repository<Asistente>){}

    createAsistente( asistente: CreateAsistenteDto ){
        const newAsistente = this.asistenteRepository.create(asistente)
        return this.asistenteRepository.save(newAsistente)
    }

    getAsistentes(){
        return this.asistenteRepository.find()
    }

    getAsistente( id: number ){
        return this.asistenteRepository.findOne({
            where: {
                id
            }
        })
    }

    deleteAsistente( id: number ){
        return this.asistenteRepository.delete({ id })
    }

    updateAsistente( id:number, asistente:UpdateAsistenteDto ){
        return this.asistenteRepository.update( { id }, asistente)
    }
}
