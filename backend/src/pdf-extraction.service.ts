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
      const error_ =
        error instanceof Error
          ? new HttpException(error.message, HttpStatus.INTERNAL_SERVER_ERROR)
          : new HttpException(
              'An unknown error occurred during PDF text extraction.',
              HttpStatus.INTERNAL_SERVER_ERROR,
            );
      throw error_;
    }
  }
}
