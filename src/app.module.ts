import { Global, Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config'
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { UserModule } from './user/user.module';
import { BookmarkModule } from './bookmark/bookmark.module';
import { PrismaModule } from './prisma/prisma.module';


//Main Module that imports other feature, application domain modules.
@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,       //without this ConfigModule imported here will only be available inside App module and not in others for eg. UserModule
    }),
    AuthModule,
    UserModule,
    BookmarkModule,
    PrismaModule,
  ],
})
export class AppModule { }
