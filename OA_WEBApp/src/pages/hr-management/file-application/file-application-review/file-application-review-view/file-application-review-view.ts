import { NativeService } from './../../../../../providers/NativeService';
import { FileApplicationService } from './../../fileApplicationService';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-file-application-review-view',
  templateUrl: 'file-application-review-view.html',
})
export class FileApplicationReviewViewPage {
  Id: string = '';
  ApprovalComments: string = '';
  readOnly: boolean = false;
  data = {
    UserName: '',
    ApplicationDate: '',
    Reason: '',
    Id: ''
  };
  constructor(public navCtrl: NavController,
              private fileApplicationService: FileApplicationService,
              private nativeService: NativeService,
              public navParams: NavParams) {
    this.Id = this.navParams.get('Id');
    this.fileApplicationService.getApprove({"id": this.Id}).subscribe(resJson => {
      if (resJson.Result && resJson.Data.length != 0){
        this.data = resJson.Data[0];
      }else{
        this.nativeService.showToast(resJson.Data, 800);
        this.navCtrl.pop();
      }
    });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad FileApplicationReviewViewPage');
  }

  approve(status){
    let data = {
      "id": this.Id,
      "memo": this.ApprovalComments,
      "status": status,
    };
    this.fileApplicationService.approve(data).subscribe(resJson => {
      
      if (resJson.Result){
        this.nativeService.showToast("审核成功", 800);
        this.navCtrl.pop();
      }else{
        this.nativeService.showToast(resJson.Data, 800);
      }
    });
  }



}
