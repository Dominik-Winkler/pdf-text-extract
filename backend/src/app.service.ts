import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getExtractText(fileForExtraction: Express.Multer.File): string {
    console.log(
      'Received file for extraction:',
      fileForExtraction.originalname,
    );
    return fileForExtraction.originalname;
  }
}
