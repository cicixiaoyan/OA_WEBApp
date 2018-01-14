import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { NativeService } from '../../../../providers/NativeService';
import { BacklogService } from '../backlogService';
import { ViewController } from 'ionic-angular/navigation/view-controller';

@IonicPage()
@Component({
  selector: 'page-backlog-approve-fail',
  templateUrl: 'backlog-approve-fail.html',
})
export class BacklogApproveFailPage {

  nextStep: '';
  manager: '';
  department: '';
  role: '';
  review: '';

  content: any;
  id: string = "";
  constructor(public navCtrl: NavController, 
              public navParams: NavParams,
              private nativeService: NativeService,
              private backlogService: BacklogService,
              private viewCtrl: ViewController
            ) {
    this.content = this.navParams.get("content");
    this.id = this.navParams.get("id");

    console.log("content", this.content);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad BacklogApproveSuccussPage');
  }
/// <param name="pass">0 通过 1 不通过</param>
        /// <param name="FormName">下拉框选中的value</param>
        /// <param name="acid">第一步返回的id</param>
        /// <param name="uid">登录用户的id</param>
        /// <param name="wNo">文件号</param>
        /// <param name="flowuid">选中的用户uid</param>
        /// <param name="flowname">选中的用户名称</param>
        /// <param name="id">自增长wid</param>
        /// <param name="wTitle">流程名称</param>
        /// <param name="FlowId">流程步骤的id</param>
  sent(){
    let data = {
      pass: 1,
      acid: this.id,
      uid: this.backlogService.httpService.globalData.Uid,
      wNo: this.content.WorkNumber,
      flowuid: "",
      flowname: "",
      id: "",
      wTitle: this.content.
    };
    this.backlogService.approveStep1({}).subscribe(resJson => {
      this.nativeService.showToast(resJson.Data, 800);
      if (resJson.Result) this.viewCtrl.dismiss(true);
        
      
    });
  }

}
