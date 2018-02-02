import { Utils } from './../../../../../providers/Utils';
import { NativeService } from './../../../../../providers/NativeService';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, PopoverController } from 'ionic-angular';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { FileApplicationService } from '../../fileApplicationService';

@IonicPage()
@Component({
  selector: 'page-file-application-add',
  templateUrl: 'file-application-add.html',
})
export class FileApplicationAddPage {
  baseForm: FormGroup;
  approveLs: string[] = [];
  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              private popoverCtrl: PopoverController,
              private FormBuilder: FormBuilder,
              private nativeService: NativeService,
              private fileApplicationService: FileApplicationService
            ) {

      this.baseForm = this.FormBuilder.group({
        "applicationdate": ['', [Validators.required]], // 员工工号
        "spid": ['', [Validators.required, Validators.maxLength(180)]], // 审核
        "memo": ['', [Validators.required]], // 备注，即申请理由
      });
      this.fileApplicationService.GetSP().subscribe(resJson => {
        if (resJson.Result){
          this.approveLs = resJson.Data;
        }else{
          this.nativeService.showToast(resJson.Data, 800);
        }
      });
  }

  ionViewDidLoad() {

  }

  submit(value1){
    let value = Object.assign({}, value1);
    value.Uid = this.fileApplicationService.httpService.globalData.Uid;
    value.applicationdate = Utils.dateFormat_zh(new Date(value.applicationdate), "yyyy-MM-dd HH:mm:ss") ;
    this.fileApplicationService.add(value).subscribe(resJson => {
      if (resJson.Result){
        this.nativeService.showToast("档案申请提交成功，请等待审核", 500);
        this.navCtrl.pop();
      }else{
        this.nativeService.showToast(resJson.Data, 800);
      }
    });
  }

}
