import { Module } from '@nestjs/common';
import { NoteController } from './api/note/note.controller';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { NoteService } from './services/note/note.service';


@Module({
  controllers: [AppController, NoteController],
  providers: [AppService, NoteService],
})
export class AppModule {}
