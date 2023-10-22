import { Injectable } from '@nestjs/common';
import {PassportStrategy} from '@nestjs/passport'
import { ExtractJwt, Strategy } from 'passport-jwt';


@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
    constructor() {
        console.log('JWT STRATEGY')
        super({ 
            jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
            ignoreExpiration: false,
            secretOrKey: 'access_token_key' 
        })
    }
    async validate(payload){
        return {
            name: payload.username,
            password: payload.password
        }
    }

}