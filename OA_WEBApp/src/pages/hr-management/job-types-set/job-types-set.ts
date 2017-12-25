import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, Refresher, ModalController } from 'ionic-angular';
import { Response } from "@angular/http";
// import 'rxjs/add/operator/map';
// import { Observable } from 'rxjs/Observable';
// import { HttpService } from "../../../providers/HttpService";
/**
 * Generated class for the JobTypesSetPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-job-types-set',
  templateUrl: 'job-types-set.html',
})
export class JobTypesSetPage {
  list: Array<any> = [];
  data: any;
  moredata: boolean = true;
  isEmpty: boolean = false;

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              // private httpService: HttpService,
              private modalCtrl: ModalController) {
      this.data = {
        "PageIndex": 0,
        "PageSize": 8
      };
      this.getList(this.data);
  }


  ionViewDidLoad() {

  }


  doRead(Params) {
    let modal = this.modalCtrl.create("JobTypesSetAddPage", {"id": Params});
    modal.present();
    modal.onDidDismiss(data => {
        data && console.log(data);
    });
  }

  doWrite() {
      let modal = this.modalCtrl.create("JobTypesSetAddPage");
      modal.present();
      modal.onDidDismiss(data => {
          data && console.log(data);
      });
      // this.navCtrl.push(MailWrite);
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
    this.list = [
      {
        "Id": 1,
        "Name": '工种名称1',
        "Category": '教务人员	',
        "Remarks": ''
      },
      {
        "Id": 2,
        "Name": '工种名称2',
        "Category": '后勤人员	',
        "Remarks": '我是备注'
      },
    ];
    // this.httpService.postFormData("", data)
    // .map((res: Response) => res.json())
    // .subscribe((resJson) => {
    //   if (resJson.Result  &&  resJson.Data.length !== 0 && (resJson.Data instanceof Array)){
    //     this.moredata = true;
    //     this.isEmpty = false;
    //     let list = resJson.Data;
    //     this.list = [...this.list, ...list];
    //   }else{
    //     this.moredata = false;
    //     this.isEmpty = (this.data.PageIndex == 0) ? true : false;
    //   }
    // });
    

  }

}
