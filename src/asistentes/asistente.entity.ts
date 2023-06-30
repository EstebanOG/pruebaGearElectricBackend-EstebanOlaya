import { type } from 'os';
import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'asistentes'})
export class Asistente{

    @PrimaryGeneratedColumn()
    id: number;

    @Column({
        type: "varchar",
        length: 100})
    nombre: string;

    @Column({
        type: "varchar",
        length: 9})
    tipoDocumento: string;
    
    @Column({
        type: "varchar",
        length: 30,
        unique: true})
    numeroDocumento: string;
    
    @Column({
        type: "varchar",
        length: 10})
    telefonoMovil: string;
    
    @Column({
        type: "varchar",
        length: 100})
    email: string;
}