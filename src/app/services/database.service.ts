import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';

@Injectable({
  providedIn: 'root'
})
export class DatabaseService {

  constructor( private firestore: AngularFirestore) { }

  async create(collection, dato){//METODO CREATE
    try{
      return await this.firestore.collection(collection).add(dato);
    }catch (error){
      console.log("error en 'create': ", error)
    }
  }//METODO CREATE

  async getAll(collection){//METODO GETALL
    try{
      return await this.firestore.collection(collection).snapshotChanges();
    }catch (error){
      console.log("error en 'getAll': ", error)
    }
  }//METODO GETALL

  async getById(collection, id){//METODO GETBYID
    try {
      return await this.firestore.collection(collection).doc(id).get();
    } catch (error) {
      console.log("error en 'getById': ", error)
    }
  }//METODO GETBYID

  async delete(collection, id){//METODO DELETE
    try {
      return await this.firestore.collection(collection).doc(id).delete();
    } catch (error) {
      console.log("error en 'delete': ", error)
    }
  }//METODO DELETE

  async update(collection, id, dato){//METODO UPDATE
    try {
      return await this.firestore.collection(collection).doc(id).set(dato);
    } catch (error) {
      console.log("error en 'update': ", error)
    }
  }//METODO UPDATE

}
