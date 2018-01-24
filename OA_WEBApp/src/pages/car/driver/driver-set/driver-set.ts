import { Component, Inject } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { CarService } from '../../car_service';
import { NativeService } from '../../../../providers/NativeService';
import { GlobalData } from '../../../../providers/GlobalData';
import { AlertController } from 'ionic-angular/components/alert/alert-controller';
import { Utils } from '../../../../providers/Utils';
@IonicPage()
@Component({
  selector: 'page-driver-set',
  templateUrl: 'driver-set.html',
})
export class DriverSetPage {
  addForm: FormGroup;
  isWrite: boolean = false;
  id: string;
  formCtrls: any;
  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              private carService: CarService,
              private nativeService: NativeService,
              private globalData: GlobalData,
              private alertCtrl: AlertController,
              @Inject(FormBuilder) formBuilder: FormBuilder) {
    this.isWrite = this.navParams.get("isWrite");
    let today = new Date();
    this.addForm = formBuilder.group({
      "Name": ["", [Validators.maxLength(10), Validators.required]],
      "Sex": ["男", Validators.required],
      "Age": [null, [Validators.max(200), Validators.required]],
      "InDate": ["", [Validators.required]],
      "Memo": ["", [Validators.maxLength(180), Validators.required]]
      // Archives: ["2017/10/9 系统管理员", [Validators.maxLength(180)]],
    });
    this.formCtrls = this.addForm.controls;
  }

  ionViewDidLoad() {
    if (!this.isWrite){
      this.carService.getDriverDetails(this.navParams.get("Id")).subscribe((resJson) => {
        if (resJson.Result && typeof(resJson.Data) !== "string"){
          let data = resJson.Data;
          this.id = data.Id;
          this.addForm.setValue({
            "Name": data.Name,
            "Sex": data.Sex,
            "Age": data.Age,
            "InDate": Utils.dateFormat(new Date(data.InDate), 'yyyy-MM-ddTHH:mm+08:00'),
            "Memo": data.Memo
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
      value.Uid = this.globalData.Uid;
      value.InDate = Utils.dateFormat(new Date(value.InDate), 'yyyy-MM-dd HH:mm:ss');

      this.carService.driverAdd(value).subscribe((resJson) => {
        if (resJson.Result){
          this.navCtrl.pop();
          this.nativeService.showToast("添加成功", 500);
        }else{
          this.nativeService.showToast(resJson.Data, 800);
        }
      });
    }else{
      value.Id = this.id;
      this.carService.driverMod(value).subscribe((resJson) => {
        if (resJson.Result){
          this.navCtrl.pop();
          this.nativeService.showToast("修改成功", 500);
        }else{
          this.nativeService.showToast(resJson.Data, 800);
        }
      });
    }
  }

  delete(){
    let prompt = this.alertCtrl.create({
      title: '删除提示',
      message: "你确定删除此司机的档案吗？<br/><span class='text-ios-danger'>删除后不能恢复</span>",
      buttons: [
        {
          text: '取消',
          handler: data => {
            console.log('Cancel clicked');
          }
        },
        {
          text: '删除',
          handler: data => {
            this.carService.driverDel(this.id).subscribe((resJson) => {
              if (resJson.Result){
                this.nativeService.showToast("删除成功", 300); 
        
              }else{
                this.nativeService.showToast(resJson.Data, 800);
              }
            });
          }
        }
      ]
    });
    prompt.present();
    
  }

}
