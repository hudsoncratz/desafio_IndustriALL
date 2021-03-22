import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, JoinColumn } from 'typeorm';
import Occurrence from './Occurrence';

@Entity('events')
export default class Event {
    @PrimaryGeneratedColumn('increment')
    id: number;

    @Column()
    eventDescription: string;
    
    @ManyToOne(() => Occurrence, occurrence => occurrence.events)
    @JoinColumn({name: 'occurrenceId'})
    occurrenceId: Occurrence;

}