import { Global, Module } from '@nestjs/common';
import { PrismaService } from './prisma.service';

@Global()
@Module({
  providers: [PrismaService],
  exports: [PrismaService]     //allows PrismaService or other providers in Prisma Module to be imported by other modules within application. 
})
export class PrismaModule {}
