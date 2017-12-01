import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { NativeService } from '../../../../providers/NativeService';
/**
 * Generated class for the DriverSetPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-driver-set',
  templateUrl: 'driver-set.html',
})
export class DriverSetPage {
  addForm: FormGroup;
  isWrite: boolean = false;
  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              private nativeService: NativeService,
              private formBuilder: FormBuilder) {
    this.isWrite = this.navParams.get("isWrite");
    let today = new Date();
    this.addForm = this.formBuilder.group({
      Name: ["", [Validators.maxLength(10), Validators.required]],
      Sex: ["", []],
      Age: [today, [Validators.maxLength(3)]],
      InDate: ["", [Validators.maxLength(5), Validators.required]],
      Remarks: ["", [Validators.maxLength(180)]],
      Archives: ["2017/10/9 系统管理员", [Validators.maxLength(180)]],
    });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DriverSetPage');
  }

  save(value){
    if (this.isWrite){
      this.nativeService.showToast("添加成功");
    }else{
      this.nativeService.showToast("修改成功");
    }
  }

}
