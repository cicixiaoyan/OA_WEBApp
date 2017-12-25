import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, PopoverController ,
  Refresher, ViewController } from 'ionic-angular';
import { ContractService } from '../contract-service';

@IonicPage()
@Component({
  selector: 'page-contract-maintenance',
  templateUrl: 'contract-maintenance.html',
})

export class ContractMaintenancePage {

  list: Array<any> = [];
  data: any;
  moredata: boolean = true;
  isEmpty: boolean = false;
  search: any;
  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              private popoverCtrl: PopoverController,
              private contractService: ContractService) {
      this.data = {
        "uid": this.contractService.httpService.globalData.Uid,
        "PageIndex": 0,
        "PageSize": 8
      };
      this.getList(this.data);

  }


  ionViewDidLoad() {

  }

  presentPopover(myEvent) {
    let popover = this.popoverCtrl.create("ContractSearchPage", {"search": this.search});
    popover.present({
      ev: myEvent
    });
    popover.onDidDismiss(search => {
      console.log(search);
      if (search){
        this.search = search.search;
        let data = search.search;
        data.uid =  this.contractService.httpService.globalData.Uid;
        data.PageIndex = 0;
        data.PageSize = 8;
        this.getList(data);
      }
    });
  }

  doRead(Params) {
    this.navCtrl.push("ContractSettingPage", { "Id": Params });
  }

  doWrite() {
    this.navCtrl.push("ContractSettingPage");
      // let modal = this.modalCtrl.create("TrainingMaintenanceSetPage");
      // modal.present();
      // modal.onDidDismiss(data => {
      //     data && console.log(data);
      // });
  }

  doRefresh(refresher: Refresher) {
    this.list = [];
    this.data.PageIndex = 1;
    this.getList(this.data);
    setTimeout(() => {
        refresher.complete();
    }, 1000);
  }


  doInfinite(): Promise<any> {
      if (this.moredata) {
          this.data.PageIndex++;
          this.getList(this.data);
      }

      return new Promise((resolve) => {
          setTimeout(() => {
              resolve();
          }, 500);
      });
  }

  private getList(data){
    this.list = [
      {
        "Id": "1",
        "Type": '劳动合同',
        "Dept": '检验科',
        "Code": "A012345677",
        "Name": '张三',
        "TurnPositive": 'false',
        "Status": '生效中'
      },
      {
        "Id": "2",
        "Type": '保密协议',
        "Dept": '检验科',
        "Code": "A0123456789",
        "Name": '李四',
        "TurnPositive": 'false',
        "Status": '试用中'
      }
    ];
    // this.contractService.getList(data).subscribe((resJson) => {
    //   if (resJson.Result  &&  resJson.Data.length !== 0 && (resJson.Data instanceof Array)){
    //     this.moredata = true;
    //     this.isEmpty = false;
    //     let list = resJson.Data;
    //     this.list = [...this.list, ...list];
    //   }else{
    //     this.moredata = false;
    //     this.isEmpty = (this.data.PageIndex == 1) ? true : false;
    //   }
    // });


  }

}
