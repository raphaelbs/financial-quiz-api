import { Test, TestingModule } from '@nestjs/testing';
import { AppController } from './app.controller';

describe('AppController', () => {
  let app: TestingModule;

  beforeAll(async () => {
    app = await Test.createTestingModule({
      controllers: [AppController],
    }).compile();
  });

  describe('root', () => {
    it('should return the home content', () => {
      const appController = app.get<AppController>(AppController);
      expect(appController.root()).toBe(
        'Visite https://github.com/raphaelbs/financial-quiz-api/wiki/ para mais informações.',
      );
    });
  });
});
