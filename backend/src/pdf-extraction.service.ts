import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { PDFParse } from 'pdf-parse';

@Injectable()
export class PDFExtractionService {
  async extractText(fileForExtraction: Express.Multer.File) {
    try {
      const buffer = new Uint8Array(fileForExtraction.buffer);
      const parser = new PDFParse(buffer);
      const result = await parser.getText();
      await parser.destroy();
      return result.text;
    } catch (error) {
      console.error('Error extracting text from PDF:', error);
      throw new HttpException(error.message, HttpStatus.UNPROCESSABLE_ENTITY);
    }
  }
}
