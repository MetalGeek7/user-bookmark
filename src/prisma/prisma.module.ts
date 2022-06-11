import { Global, Module } from '@nestjs/common';
import { PrismaService } from './prisma.service';

@Global()
@Module({
  providers: [PrismaService],
  exports: [PrismaService]     //allows PrismaService or other providers created within Prisma Module to be imported by other modules of the application. 
})
export class PrismaModule {}
