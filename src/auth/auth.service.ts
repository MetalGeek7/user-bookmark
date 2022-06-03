import { Injectable } from "@nestjs/common";
import { PrismaService } from "src/prisma/prisma.service";

@Injectable({})
export class AuthService {

    constructor (prisma: PrismaService) {}
    
    login() {

    }

    signin() {
        return {
            msg: "I am signing in"
        }
    }

    signup() {
        return 'Welcome to the signup service!!'
    }
}