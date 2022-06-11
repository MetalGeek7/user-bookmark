import { Injectable } from "@nestjs/common";
import { PrismaService } from '../prisma/prisma.service';
import { AuthDto } from "./dto";

@Injectable({})
export class AuthService {

    constructor (prisma: PrismaService) {}
    
    login() {

    }

    signup(dto: AuthDto) {
        return 'Welcome to the signup service!!'
    }

    signin() {
        return {
            msg: "I am signing in"
        }
    }


}