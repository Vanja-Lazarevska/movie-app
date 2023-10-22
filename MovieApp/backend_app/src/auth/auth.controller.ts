import { Body, Controller, Post,  UseGuards, Request } from '@nestjs/common';
import { loginCredentialDto } from 'src/dto/loginCredentials.dto';
import { signUpCredentials } from 'src/dto/signUpCredentials.dto';
import { AuthService } from './auth.service';
import { LocalAuthGuard } from 'src/guards/local-auth-guard';
import { AuthGuard } from '@nestjs/passport';
import * as bcrypt from 'bcrypt'

@Controller()
export class AuthController {
    constructor(private readonly authService: AuthService) {}

    @Post('/login')
    @UseGuards(LocalAuthGuard)
    login(@Request() req) {
        console.log(req.user)
        return this.authService.login(req.user)
    }
    
    @Post('/signUp')
    async signUp(@Body() signUpCredential: signUpCredentials) {
        const {password, username } = signUpCredential
      const saltOrRounds = 10
      const hashedPassword = await bcrypt.hash(password, saltOrRounds)
      const newUserToSave = {username, password:hashedPassword }
        const response = await this.authService.signUp(newUserToSave)
        if(!response) {
            return false
        } else {
            return true
        }
    }
}
