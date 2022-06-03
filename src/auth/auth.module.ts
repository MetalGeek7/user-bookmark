import { Module } from "@nestjs/common";
import { PrismaModule } from "src/prisma/prisma.module";
import { AuthController } from "./auth.controller";
import { AuthService } from "./auth.service";

@Module({
    imports: [PrismaModule],            //This is not required in User and Bookmark since PrismaModule is marked @Global.
    controllers: [AuthController],
    providers: [AuthService],
})
export class AuthModule {

}