import { IsNotEmpty } from "class-validator"
import { MinLength } from "class-validator"


export class signUpCredentials {

    @IsNotEmpty()
    @MinLength(8)
    password:string

    @IsNotEmpty()
    username: string
}