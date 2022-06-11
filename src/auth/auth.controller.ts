import { Body, Controller, Post, Req } from "@nestjs/common";
import { Request } from "express";
import { AuthService } from "./auth.service";
import { AuthDto } from "./dto";

@Controller('auth')
export class AuthController {

    constructor(private authService: AuthService) { }

    @Post('signup')
    signup(@Body() authDto: AuthDto) {
        console.log({
            authDto,
            'typeofdto': typeof authDto,
        })
        return this.authService.signup(authDto)
    }
    @Post('signin')
    signin() {
        return this.authService.signin()
    }
}