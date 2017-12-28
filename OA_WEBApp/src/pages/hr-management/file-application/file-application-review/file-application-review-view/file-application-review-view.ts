import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-file-application-review-view',
  templateUrl: 'file-application-review-view.html',
})
export class FileApplicationReviewViewPage {
  Id: string = '';
  ApprovalComments: string = '我是审核意见';
  readOnly: boolean = false;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.Id = this.navParams.get('Id');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad FileApplicationReviewViewPage');
  }

  agree(){
    // 审核通过
    console.log(this.Id, this.ApprovalComments);
  }

  oppose(){
    // 审核不通过
    console.log(this.Id, this.ApprovalComments);
  }

}
