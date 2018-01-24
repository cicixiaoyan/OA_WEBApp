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

  }


  ionViewWillEnter() {
    this.list = [];
    this.data = {
      "PageIndex": 0,
      "PageSize": 8,
      "bmid": "",
      "nf": "",
      "tp": "",
      "startdate": "",
      "enddate": "",
    };
    this.getList(this.data);
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
        data.PageIndex = 0;
        data.PageSize = 8;
        this.list = [];
        console.log(data);
        this.getList(data);
      }
    });
  }

  doRead(id) {
    this.navCtrl.push("ContractSettingPage", { "Id": id, 'readOnly': true });
  }

  doRefresh(refresher: Refresher) {
    this.list = [];
    this.data.PageIndex = 0;
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

    this.contractService.getList(data).subscribe((resJson) => {
      if (resJson.Result  &&  resJson.Data.length !== 0 && (resJson.Data instanceof Array)){
        this.moredata = true;
        this.isEmpty = false;
        let list = resJson.Data;
        this.list = [...this.list, ...list];
      }else{
        this.moredata = false;
        this.isEmpty = (this.data.PageIndex == 0) ? true : false;
      }
    });


  }

}
