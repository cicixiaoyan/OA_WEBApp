import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { NativeService } from '../../../../providers/NativeService';
import { BacklogService } from '../backlogService';
import { ViewController } from 'ionic-angular/navigation/view-controller';
import { GlobalData } from '../../../../providers/GlobalData';

@IonicPage()
@Component({
  selector: 'page-backlog-approve-succuss',
  templateUrl: 'backlog-approve-succuss.html',
})
export class BacklogApproveSuccussPage {

  selected: string;
  userIDs: string;
  UserNames: string = "";

  UserIDs =  [];

  content: any;
  param: any;

  stepLs = [];
  personLs = [];

  item: any;
  constructor(public navCtrl: NavController, 
              public navParams: NavParams,
              private nativeService: NativeService,
              private backlogService: BacklogService,
              private globalData: GlobalData,
              public viewCtrl: ViewController
            ) {
    this.content = this.navParams.get("content");
    this.param = this.navParams.get("param");
    let data = {Number: this.content.Number, 
      acid: this.param.acid, strNextNodeNum: this.content.strNextNodeNum, 
      FlowNumber: this.content.FlowNumber
    };

    this.backlogService.passData(data).subscribe(resJson => {
      if (resJson.Result) {
        this.item = resJson.Data;
        // this.stepLs = [...resJson.Data];
        // if (this.item.ls instanceof Array){
        this.stepLs = [...this.item.ls];
        console.log(this.stepLs);
        // }else{
          
        // }
      }
    });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad BacklogApproveSuccussPage');
  }

  getuser(value) {
    this.backlogService.reviewersLs({"selected": value, "status": 1}).subscribe(resJson => {
      if (resJson.Result){
        this.personLs = resJson.Data;
      }
    });
  }
  agree(){
    this.UserNames = "";
    this.UserIDs.forEach((value) => {
      for (let p of this.personLs){
        if (p.ID == value) {
          this.UserNames += p.Name + ",";
        }
      }
    });
    this.userIDs = this.UserIDs.length > 0 ? this.UserIDs.join(",") + "," : "";
    
    let data = {
      // "id": this.content.Id,
      "uid": this.globalData.Uid,
      "acid": this.item.acid,
      "FK_wfid": this.item.FK_wfid,
      "Number": this.item.Number,
      "wTitle": this.item.wTitle,
      "UserIDs": this.userIDs,
      "UserName": this.UserNames,
      "selected": this.selected,
    };

    
    this.backlogService.passSteps2(data).subscribe(resJson => {
      this.nativeService.showToast(resJson.Data, 800);
      if (resJson.Result) this.viewCtrl.dismiss(true);
    });
  }

  // 

}
