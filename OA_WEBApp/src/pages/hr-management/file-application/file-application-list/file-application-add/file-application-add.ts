import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, PopoverController } from 'ionic-angular';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { FileApplicationService } from '../../fileApplicationService';

/**
 * Generated class for the FileApplicationAddPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-file-application-add',
  templateUrl: 'file-application-add.html',
})
export class FileApplicationAddPage {
  baseForm: FormGroup;
  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              private popoverCtrl: PopoverController,
              private FormBuilder: FormBuilder,
              private fileApplicationService: FileApplicationService
            ) {

      this.baseForm = this.FormBuilder.group({
        "ApplicationDate": ['', [Validators.required]], // 员工工号
        "Approver": ['', [Validators.required, Validators.maxLength(180)]], // 审核
        "Remarks": ['', [Validators.required]], // 备注，即申请理由
        "InforMemethod": ['1', [Validators.required]] // 消息通知方式
      });
  }

  ionViewDidLoad() {

  }

  submit(value){
    value.Uid = this.fileApplicationService.httpService.globalData.Uid;
    console.log(value);
  }

}
