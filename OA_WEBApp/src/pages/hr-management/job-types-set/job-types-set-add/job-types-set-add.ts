import { NativeService } from './../../../../providers/NativeService';
import { JobTypeSetService } from './../job-types-set-service';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
// import 'rxjs/add/operator/map';
// import { Observable } from 'rxjs/Observable';
// import { HttpService } from "../../../providers/HttpService";
/**
 * Generated class for the JobTypesSetAddPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-job-types-set-add',
  templateUrl: 'job-types-set-add.html',
})
export class JobTypesSetAddPage {
  typeForm: FormGroup;
  id: string = "";
  typeLs = [];
  ssfl: string = "";
  constructor(public navCtrl: NavController, 
              public navParams: NavParams, 
              private jobTypeSetService: JobTypeSetService,
              private formBuilder: FormBuilder,
              private nativeService: NativeService,
              private viewCtrl: ViewController) {
    this.typeForm = this.formBuilder.group({
      ssfl: ['', [Validators.required]], // 第一个参数是默认值
      gzmc: ["", [Validators.required]],
      memo: ["", [ Validators.maxLength(180)]],
    });

    if (!!this.navParams.get("id")){
      this.id = this.navParams.get("id");
      this.jobTypeSetService.getList({ "id": this.id})
      .subscribe(resJson => {
        if (resJson.Result){
          let data = resJson.Data[0];
          this.ssfl = data.GZTypeName;
          this.typeForm.patchValue({
            gzmc: data.GZNmae,
            memo: data.GZMemo,
          });
        }else{
          this.nativeService.showToast(resJson.Data, 800);
        }
      });
    }
    
    this.jobTypeSetService.getGZType({}).subscribe(resJson => {
      if (resJson.Result){
        let arr = [];
        for (let i in resJson.Data){
          arr.push({id: i, mc: resJson.Data[i]});
          if (resJson.Data[i] == this.ssfl) this.typeForm.patchValue({"ssfl": i});
        }
        this.typeLs = [...arr];
        
    
      }else{
        this.nativeService.showToast(resJson.Data, 500);
      }
    });

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad JobTypesSetAddPage');
  }

  dismiss(){
    this.viewCtrl.dismiss();
  }

  sent(value){
    // 提交
    if (this.id !== ""){
      value.id = this.id;
      this.jobTypeSetService.mod(value).subscribe(resJson => {
        if (resJson.Result){
          this.nativeService.showToast("修改成功", 800);
          this.viewCtrl.dismiss();
        }else{
          this.nativeService.showToast(resJson.Data, 800);
        }
      });
    }else{
      this.jobTypeSetService.add(value).subscribe(resJson => {
        if (resJson.Result){
          this.nativeService.showToast("添加成功", 800);
          this.viewCtrl.dismiss();
        }else{
          this.nativeService.showToast(resJson.Data, 800);
        }
      });
    }
  }

}
