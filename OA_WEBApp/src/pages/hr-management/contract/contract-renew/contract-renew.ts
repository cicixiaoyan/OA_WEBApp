import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, PopoverController ,
  Refresher, ViewController } from 'ionic-angular';
import { ContractService } from '../contract-service';

@IonicPage()
@Component({
  selector: 'page-contract-renew',
  templateUrl: 'contract-renew.html',
})
export class ContractRenewPage {

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
    let popover = this.popoverCtrl.create("ContractSearchSeparatePage", {"search": this.search, 'name': '续签'});
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
    this.navCtrl.push("ContractRenewViewPage", { "Id": id });
  }

  doWrite() {
    this.navCtrl.push("ContractRenewViewPage");
      // let modal = this.modalCtrl.create("TrainingMaintenanceSetPage");
      // modal.present();
      // modal.onDidDismiss(data => {
      //     data && console.log(data);
      // });
  }

  delete(index: number){
    const id = this.list[index].Id;
    this.list.splice(index, 1);
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
        "Name": '张三',
        "Code": "A012345677",
        "Dept": '检验科',
        "RenewType": '合同延期',
        "RenewDate": '2017-12-27'
      },
      {
        "Id": "2",
        "Name": '李四',
        "Code": "A012345688",
        "Dept": '其他科',
        "RenewType": '其他原因',
        "RenewDate": '2017-12-27'
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
