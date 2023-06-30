import { Body, Controller, Post, Get, Param, ParseIntPipe, Delete, Patch } from '@nestjs/common';
import { CreateAsistenteDto } from './dto/create-asistente.dto';
import { AsistentesService } from './asistentes.service';
import { Asistente } from './asistente.entity';
import { UpdateAsistenteDto } from './dto/update-asistente.dto';

@Controller('asistentes')
export class AsistentesController {

    constructor( private asistentesService: AsistentesService) { }

    @Get()
    getAsistentes(): Promise<Asistente[]>{
        return this.asistentesService.getAsistentes();
    }

    @Get(':id')
    getAsistente(@Param('id', ParseIntPipe) id: number): Promise<Asistente>{
        return this.asistentesService.getAsistente(id);
    }

    @Post()
    createAsistente(@Body() newAsistente: CreateAsistenteDto): Promise<Asistente>{
        return this.asistentesService.createAsistente(newAsistente)
    }

    @Delete(':id')
    deleteAsistente(@Param('id', ParseIntPipe) id: number) {
        return this.asistentesService.deleteAsistente(id)
    }

    @Patch(':id')
    updateAsistente(@Param('id', ParseIntPipe) id:number, @Body()
    asistente: UpdateAsistenteDto){
        return this.asistentesService.updateAsistente( id, asistente)
    }
    
}
