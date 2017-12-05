import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { CarService } from '../../car_service';
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
  id: string;
  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              private carService: CarService,
              private nativeService: NativeService,
              private formBuilder: FormBuilder) {
    this.isWrite = this.navParams.get("isWrite");
    let today = new Date();
    this.addForm = this.formBuilder.group({
      Name: ["", [Validators.maxLength(10), Validators.required]],
      Sex: ["", []],
      Age: [today, [Validators.maxLength(3)]],
      InDate: ["", [Validators.maxLength(5), Validators.required]],
      Memo: ["", [Validators.maxLength(180)]]
      // Archives: ["2017/10/9 系统管理员", [Validators.maxLength(180)]],
    });
  }

  ionViewDidLoad() {
    if (!this.isWrite){
      this.carService.getDriverDetails(this.navParams.get("Id")).subscribe((resJson) => {
        if (resJson.Resule && typeof(resJson.Data) !== "string"){
          let data = resJson.Data;
          this.id = data.Id;
          this.addForm.setValue({
            Name: data.Name,
            Sex: data.Sex,
            Age: data.Age,
            InDate: data.InDate,
            Memo: data.Memo
          });
        }else{
          this.nativeService.showToast(resJson.Data, 800);
          this.navCtrl.pop();
        }
      });
    }
  }

  save(value){
    if (this.isWrite){
      this.carService.driverAdd(value).subscribe((resJson) => {
        if (resJson.Resule){
          this.nativeService.showToast("添加成功", 500);
        }else{
          this.nativeService.showToast(resJson.Data, 800);
        }
      });
    }else{
      value.Id = this.id;
      this.carService.driverMod(value).subscribe((resJson) => {
        if (resJson.Resule){
          this.nativeService.showToast("修改成功", 500);
        }else{
          this.nativeService.showToast(resJson.Data, 800);
        }
      });
    }
  }

}
