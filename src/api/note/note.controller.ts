import { Body, Controller, Delete, Get, Param, Post, Put, Query } from '@nestjs/common';
import { Note } from 'src/models/note.model';
import { NoteService } from 'src/services/note/note.service';


@Controller('note')
export class NoteController {
    constructor(private noteS:NoteService){}

    @Get()
    getAllNote(){
        return this.noteS.getAll()
    }
    @Get()
        getNoteById(@Query("id")id :string){
            return this.noteS.getNoteById(id);
        }
  


    @Post()
        createNewNote(@Body()note:  Note){
            return this.noteS.createNote(note)

        }
    @Put()
        updateNote(@Body()note:  Note){
            return this.noteS.changeNote(note)
        }
    @Delete()
        deleteeNote(@Query('id') id:string){
            console.log(id)
            return
        }
        


   
}
