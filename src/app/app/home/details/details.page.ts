import { Component, OnInit, ViewChild, OnDestroy } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Subscription } from 'rxjs';
import jsPDF from 'jspdf';
import 'jspdf-autotable';


@Component({
  selector: 'app-details',
  templateUrl: './details.page.html',
  styleUrls: ['./details.page.scss'],
})
export class DetailsPage implements OnInit, OnDestroy {
  details = [];
  dataSubs: Subscription;
  constructor(private db: AngularFirestore){}

  ngOnInit() {
    this.dataSubs = this.db.collection('Employee').snapshotChanges().subscribe(res => {
      this.details = [];
      res.forEach(a => {
        let info: any = a.payload.doc.data();
        info.id  = a.payload.doc.id;
        this.details.push(info);
      });
    });
  }

  ngOnDestroy(){
    this.dataSubs.unsubscribe();
  }

  onEdit(){

  }

  onDelete(){

  }

  onCreatePdf(){
    const doc =  new jsPDF();
    doc.autoTable({html: '#myTable'});
    doc.save('table.pdf');
  }
}