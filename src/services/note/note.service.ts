import { Injectable } from '@nestjs/common';
import { Note } from 'src/models/note.model';
import * as admin from 'firebase-admin'

@Injectable()
export class NoteService {
    notes= []


    db:admin.firestore.Firestore
    constructor(){
        this.db=admin.firestore()
    }
    async getAll(){
        let res = []
       await this.db.collection('notes').get().then((e)=>{
        e.docs.forEach((e)=>{
            res.push(e.data())
        })
       })
       return res

        return this.notes
    }
    async getNoteById(id: string){
       let notes =  await this.db.collection('notes').doc(id).get();
        return notes.data();
    }

   async createNote(note : Note){
        note.id=Date.now().toString()

       
        await this.db.collection('notes').doc(note.id).set(note)
        // this.notes.push(note)
        // return 'Tao thanh cong note' + note.id
        


   }
   async changeNote(note : Note){
    console.log(note)
    await this.db.collection('notes').doc(note.id).set(note)
        // for(let i =0;i<this.notes.length;i++){
        //     if(note.id ==this.notes[i].id){
        //         this.notes[i] = note
        //         return 'Sua thanh cong note' + note.id
        //     }
        // }
        // return 'Khong tim thay note'
     
   }
   
   


   




    
}