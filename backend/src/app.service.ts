import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { PDFExtractionService } from './pdf-extraction.service';

@Injectable()
export class AppService {
  constructor(private readonly pdfExtractionService: PDFExtractionService) {} // Inject here

  async getExtractText(fileForExtraction: Express.Multer.File) {
    if (fileForExtraction.mimetype === 'application/pdf') {
      return await this.pdfExtractionService.extractText(fileForExtraction);
    }
    throw new HttpException('Unsupported file type', HttpStatus.BAD_REQUEST);
  }
}
