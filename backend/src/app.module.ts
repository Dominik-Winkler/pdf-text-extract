import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PDFExtractionService } from './pdf-extraction.service';

@Module({
  imports: [],
  controllers: [AppController],
  providers: [AppService, PDFExtractionService],
})
export class AppModule {}
