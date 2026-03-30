import {
  Controller,
  Post,
  UploadedFile,
  UseInterceptors,
} from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express/multer/interceptors/file.interceptor';
import { AppService } from './app.service';

@Controller('api')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Post('extract-text')
  @UseInterceptors(FileInterceptor('file'))
  extractText(@UploadedFile() file: Express.Multer.File): string {
    return this.appService.getExtractText(file);
  }
}
