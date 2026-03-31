import { Injectable } from '@nestjs/common';
import { PDFExtractionService } from './pdf-extraction.service';

@Injectable()
export class AppService {
  constructor(private readonly pdfExtractionService: PDFExtractionService) {} // Inject here

  async getExtractText(
    fileForExtraction: Express.Multer.File,
  ): Promise<string> {
    if (fileForExtraction.mimetype === 'application/pdf') {
      return await this.pdfExtractionService.extractText(fileForExtraction);
    }
    return 'Unsupported file type';
  }
}
