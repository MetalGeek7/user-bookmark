import { INestApplication, ValidationPipe } from "@nestjs/common";
import { Test } from "@nestjs/testing";
import { AppModule } from "../src/app.module";

describe('App e2e', () => {
  let app: INestApplication;
  beforeAll(async () => {
    const moduleRef = await
      Test.createTestingModule({
        imports: [AppModule],
      }).compile();

    //TODO: Failing to initialize app due to missing dependency while running tests
    // app = moduleRef.createNestApplication();
    // app.useGlobalPipes(
    //   new ValidationPipe({ whitelist: true, }),
    // );
    // await app.init();  
  });
  
  // afterAll( () => {
  //   app.close();
  // });
  it.todo('Should pass');
});