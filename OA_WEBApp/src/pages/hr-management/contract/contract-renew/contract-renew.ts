import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, PopoverController ,
  Refresher, ViewController } from 'ionic-angular';
import { ContractService } from '../contract-service';
import { NativeService } from '../../../../providers/NativeService';
import { AlertController } from 'ionic-angular/components/alert/alert-controller';
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
              private nativeService: NativeService,
              private popoverCtrl: PopoverController,
              private alertCtrl: AlertController,
              private contractService: ContractService) {
      this.data = {
        "uid": this.contractService.httpService.globalData.Uid,
        "PageIndex": 0,
        "PageSize": 8
      };
      

  }

  ionViewWillEnter() {
    this.doRefresh(null);
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
    let prompt = this.alertCtrl.create({
      title: '温馨提示',
      message: "您确定删除此条续签合同吗？<br />删除后不能回复！！！",
      buttons: [
        {
          text: '取消',
          handler: data => {
            console.log('Cancel clicked');
          }
        },
        {
          text: '删除',
          cssClass: 'text-ios-danger',
          handler: data => {
            const id = this.list[index].Id;

            // this.list.splice(index, 1);
            this.contractService.delRenew({ id: id }).subscribe(resJson => {
              if (resJson.Result) {
                this.nativeService.showToast("合同删除成功", 500);
                this.doRefresh(null);
              } else {
                this.nativeService.showToast(resJson.Data, 800);
              }
            });
          }
        }
      ]
    });
    prompt.present();

  }

  doRefresh(refresher: Refresher) {
    this.list = [];
    this.data.PageIndex = 0;
    this.getList(this.data);
    setTimeout(() => {
      refresher && refresher.complete();
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
    
    this.contractService.getRenew(data).subscribe((resJson) => {
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
