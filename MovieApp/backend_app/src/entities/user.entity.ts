import { User } from "src/interface/userInterface";
import {Entity, Column, PrimaryGeneratedColumn} from 'typeorm'

@Entity('users')
export class UserEntity implements User {

    @PrimaryGeneratedColumn()
    id: string;

    @Column()
    username: string;

    @Column()
    password: string;
}