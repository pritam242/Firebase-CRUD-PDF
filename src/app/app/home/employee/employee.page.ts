import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { CompanyService } from '../company.service';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.page.html',
  styleUrls: ['./employee.page.scss'],
})
export class EmployeePage implements OnInit {
  isCreating = false;
  constructor(
              private cmpService: CompanyService,
              private toastCtrl: ToastController
              ) { }

  ngOnInit() {
  }

  onSubmit(f: NgForm){
    this.isCreating = true;
    if (!f.valid){
      return;
    }
    let data = f.value;
    this.cmpService.createEmpData(data).then(res => {
      console.log(res);
      // this.resetForm(f);
    });
    this.toastCtrl.create({message: 'Successfully created', duration: 1000}).then(toastEl => {
      toastEl.present();
    });
    f.reset();
  }

  // async presentToast() {
  //   const toast = await this.toastCtrl.create({
  //     message: 'Your settings have been saved.',
  //     duration: 2000
  //   });
  //   toast.present();
  // }


  // private resetForm(f: NgForm){
  //   if (f != null){
  //     f.resetForm();
  //   }
  //   this.cmpService.formData = {
  //     id: null,
  //     firstName: '',
  //     lastName: '',
  //     address: '',
  //     pin: null,
  //     city: '',
  //     country: '',
  //     contact: '',
  //     email: '',
  //   };
  // }
}
