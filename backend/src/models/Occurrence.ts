import { Entity, Column, PrimaryGeneratedColumn, OneToMany, JoinColumn } from 'typeorm';
import Event from './Event';

@Entity('occurrences')
export default class Occurrence {
    @PrimaryGeneratedColumn('increment')
    id: number;

    @Column()
    title: string;

    @Column()
    initDate: string;

    @Column()
    endDate: string;

    @OneToMany(() => Event, event => event.occurrenceId, {
        cascade: ['insert', 'update']
    })
    @JoinColumn({name: 'occurrenceId'})
    events: Event[];
}