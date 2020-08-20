import { Injectable } from '@angular/core';
import { firestore } from 'firebase';
import { AngularFirestore } from '@angular/fire/firestore';
import { Employee } from './employee/employee.model';

@Injectable({
  providedIn: 'root'
})
export class CompanyService {
  formData: Employee;

  constructor(private fireStore: AngularFirestore) { }

  
  createEmpData(record){
    return this.fireStore.collection('Employee').add(record);
  }

  getEmpData(){
    return this.fireStore.collection('Employee').snapshotChanges();
  }

  updateEmpData(record){
    return this.fireStore.collection('Employee').doc(record.payload.doc.id).set({completed: true}, {merge: true});
  }

  deleteEmpData(record){
    return this.fireStore.collection('Employee').doc(record.payload.doc.id).delete();
  }
}
