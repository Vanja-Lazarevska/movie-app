import { Injectable, UnauthorizedException } from "@nestjs/common";
import { PassportStrategy } from "@nestjs/passport";
import { Strategy } from "passport-local";
import { loginCredentialDto } from "src/dto/loginCredentials.dto";
import { AuthService } from "../auth.service";


@Injectable()
export class LocalStrategy extends PassportStrategy(Strategy) {

    constructor(private authService: AuthService  ){
        super()
    }

    async validate(username: string, password: string) {
        const user = await this.authService.validateUser(username, password)
        if(!user) {
            return null
        } else {
            console.log('USER IN VALIDATE IN LOCAL STRATEGY',user)
            return user
        }

    }

}