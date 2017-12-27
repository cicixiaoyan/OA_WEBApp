import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, PopoverController ,
  Refresher, ViewController } from 'ionic-angular';
import { ContractService } from '../contract-service';

@IonicPage()
@Component({
  selector: 'page-contract-list',
  templateUrl: 'contract-list.html',
})
export class ContractListPage {

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

  doRead(id) {
    this.navCtrl.push("ContractSettingPage", { "Id": id, 'readOnly': true });
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
        "Name": '张三', // 员工姓名
        "Dept": '检验科', // 员工部门
        "Type": '劳动合同', // 合同类型
        "ContractNumber": "A012345677", // 合同编号
        "TurnPositive": '已转正', // 是否转正
        "Status": '生效中' // 合同状态
      },
      {
        "Id": "2",
        "Name": '李四', // 员工姓名
        "Dept": '其他', // 员工部门
        "Type": '劳动合同', // 合同类型
        "ContractNumber": "A012345688", // 合同编号
        "TurnPositive": '未转正', // 是否转正
        "Status": '试用中' // 合同状态
      },

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
