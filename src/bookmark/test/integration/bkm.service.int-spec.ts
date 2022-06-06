import { Test } from "@nestjs/testing";
import { AppModule } from "src/app.module";
import { BookmarkModule } from "src/bookmark/bookmark.module";
import { PrismaService } from "src/prisma/prisma.service";

describe('BookmarkService Integration', () => {
    let prisma: PrismaService;
    let bookmarkService: BookmarkModule
    beforeAll(async () => {
        const moduleRef = await Test.createTestingModule({
          imports: [AppModule],
        }).compile();
    
        prisma = moduleRef.get(PrismaService);
        // bookmarkService = moduleRef.get(BookmarkModule);
        await prisma.cleanDatabase();
      });
    it.todo('Default test pass')
})