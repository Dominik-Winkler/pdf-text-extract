import { Injectable } from '@nestjs/common';
import { PDFParse } from 'pdf-parse';

@Injectable()
export class PDFExtractionService {
  async extractText(fileForExtraction: Express.Multer.File): Promise<string> {
    const buffer = new Uint8Array(fileForExtraction.buffer);
    const parser = new PDFParse(buffer);
    const result = await parser.getText();
    await parser.destroy();
    return result.text;
  }
}
