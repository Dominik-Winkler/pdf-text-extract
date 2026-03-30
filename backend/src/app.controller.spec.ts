import { Test, TestingModule } from '@nestjs/testing';
import { Readable } from 'node:stream';
import { AppController } from './app.controller';
import { AppService } from './app.service';

describe('AppController', () => {
  let appController: AppController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [AppController],
      providers: [AppService],
    }).compile();

    appController = app.get<AppController>(AppController);
  });

  const testFile: Express.Multer.File = {
    fieldname: 'file',
    originalname: 'test.pdf',
    encoding: '7-bit',
    mimetype: 'application/pdf',
    buffer: Buffer.from('Test PDF content'),
    size: 12_345,
    stream: undefined as unknown as Readable,
    destination: '',
    filename: '',
    path: '',
  };

  describe('root', () => {
    it(`should return ${testFile.originalname}`, () => {
      expect(appController.extractText(testFile)).toBe(testFile.originalname);
    });
  });
});
