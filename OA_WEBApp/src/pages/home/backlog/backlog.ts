import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { BacklogDetail } from './backlog-detail/backlog-detail';

/**
 * Generated class for the Backlog page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-backlog',
  templateUrl: 'backlog.html',
})
export class Backlog {
  work: string = "notDone";
  nxPage: any = BacklogDetail;
  params: any;

  items: any;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.items = [
      {
      ggid:"1",
      wfName: "测试工作流2",
      wfNo: "2", //工作编号
      FK_fid: "1234" ,//表单id
      fqr:"系统管理员",
      dqbz:"1"
    },
      {
      ggid:"1",
      wfName: "测试工作流2",
      wfNo: "2", //工作编号
      FK_fid: "1234" ,//表单id
      fqr:"系统管理员",
      dqbz:"审批"
    },
    ]
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Backlog');
  }

}
