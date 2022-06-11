import { Test } from "@nestjs/testing";
import { AppModule } from "src/app.module";
import { BookmarkModule } from "src/bookmark/bookmark.module";
import { BookmarkService } from "src/bookmark/bookmark.service";
import { PrismaService } from "src/prisma/prisma.service";

describe('BookmarkService Integration', () => {
    let prisma: PrismaService;
    let bookmarkService: BookmarkService
    beforeAll(async () => {
        const moduleRef = await Test.createTestingModule({
          imports: [AppModule],
        }).compile();
    
        prisma = moduleRef.get(PrismaService);
        bookmarkService = moduleRef.get(BookmarkService);
        await prisma.cleanDatabase();
      });
    it.todo('Default test pass')
})