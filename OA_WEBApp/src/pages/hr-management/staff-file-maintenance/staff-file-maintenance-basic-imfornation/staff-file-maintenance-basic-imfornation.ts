import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';

@IonicPage()
@Component({
  selector: 'page-staff-file-maintenance-basic-imfornation',
  templateUrl: 'staff-file-maintenance-basic-imfornation.html',
})
export class StaffFileMaintenanceBasicImfornation {
  baseForm: FormGroup;
  hideOne: boolean = true;
  hideTwo: boolean = true;
  hideThree: boolean = true;
  hideFour: boolean = true;
  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              private FormBuilder: FormBuilder
            ) {
      this.baseForm = this.FormBuilder.group({
        JobNumber: ['', []],
        Name: ['', []],
        Sex: ['', []],
        BirthDate: ['', []],
        NativePlace: ['', []],
        Ethnic: ['', []],
        JoinPartyTime: ['', []],
        PoliticalStatus: ['', []],
        IDC: ['', []],
        StaffStatus: ['', []],

        FirstEdu: ['', []],
        GraduationDate: ['', []],
        GraduatedSchool: ['', []],
        profession: ['', []],
        SecondEdu: ['', []],
        SecondGraduatedSchool: ['', []],
        Degree: ['', []],
        AccountLocation: ['', []],
        FamilyAddress: ['', []],
        Telephone: ['', []],
        Mobile: ['', []],
        Email: ['', []],
        CertificateObtained: ['', []],

        Dept: ['', []],
        Duty: ['', []],
        JobTitle: ['', []],
        ProfessionalQualification: ['', []],
        StaffFileNumber: ['', []],
        Workday: ['', []],
        Indate: ['', []],
        EmployeeNature: ['', []],
        MedicareNumber: ['', []],
        PensionBookNumber: ['', []],
        ProvidentFundAccount: ['', []],
        Remarks: ['', []]
      });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad StaffFileMaintenanceBasicImfornationPage');
  }

  shrink(parma){
    if (parma === 'one') this.hideOne = !this.hideOne;
    if (parma === 'two') this.hideTwo = !this.hideTwo;
    if (parma === 'three') this.hideThree = !this.hideThree;
    if (parma === 'four') this.hideFour = !this.hideFour;
  }
  sent(value){
    console.log(value);
  }

}
