import {  Injectable } from '@nestjs/common';
import { signUpCredentials } from 'src/dto/signUpCredentials.dto';
import {InjectRepository} from '@nestjs/typeorm'
import { UserEntity } from 'src/entities/user.entity';
import {Repository} from 'typeorm'
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcrypt'


@Injectable()
export class AuthService {
    constructor(@InjectRepository(UserEntity) private readonly userRepository: Repository<UserEntity>,
    private readonly jwtService: JwtService ){}


    async validateUser(username: string, password: string) {
        console.log('authservice',username, password)
    
        const userFound = await this.userRepository.findOneBy({
            username: username,
        })

        if(!userFound) return null
        const passwordValid = await bcrypt.compare(password, userFound.password)

        if(userFound && passwordValid){
        return userFound
    }
     return null
    }

    async login(user: UserEntity) {
    console.log('LOGIN SERVER SIDE', user)
    const {username, id } = user
    
        const payload = {
            username: username,
            sub: id
        }
        const token = this.jwtService.sign(payload)
        console.log(token)
        return {
            access_token: token
        }
    }

    async signUp(signUpCredentials: signUpCredentials) {

        const { username, password} = signUpCredentials
        const userFound = await this.userRepository.findOne({
            where:{username : username}
        })
        console.log(userFound)
       
        if(userFound) {
            return false
        } 
        else {
            const newUser = {
                password: password,
                username: username
            }
        
            const newUserAdded = this.userRepository.create(newUser)
            console.log(newUserAdded)
            const newUserSaved = await this.userRepository.save(newUserAdded)
            return  true
        }
    }
}
