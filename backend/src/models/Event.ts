import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn, ManyToOne, JoinColumn } from 'typeorm';
import User from './User';

@Entity('events')
class Event {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column() // define que é uma coluna normal que por padrão se não especificar o tipo, ele irá usar varchar(string).
    user_id: string;
    
    @ManyToOne(() => User) // Define oq deve retornar, e classificamos Como Muitos Para Um
    @JoinColumn({name: 'user_id'})
    user : User;

    @Column()
    nome: string;

    @Column()
    local: string;

    @Column()
    comentario: string;

    @Column()
    likes: number;

    @Column()
    dislikes: number;

    @Column()
    image: string;

    @CreateDateColumn()
    created_at: Date;

    @UpdateDateColumn() 
    updated_at: Date;
}


export default Event;