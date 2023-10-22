import { IsNotEmpty } from "class-validator"
import { MinLength } from "class-validator"

export class loginCredentialDto {
    @IsNotEmpty()
    email: string


    @IsNotEmpty()
    @MinLength(8)
    password: string
} 


