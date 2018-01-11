import { NativeService } from './../../../providers/NativeService';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, Refresher, ModalController } from 'ionic-angular';
import { JobTypeSetService } from './job-types-set-service';


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
  searchKey: string = "";
  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              private jobTypeSetService: JobTypeSetService,
              private nativeService: NativeService,
              private modalCtrl: ModalController) {
      this.data = {
        "PageIndex": 0,
        "PageSize": 8,
        "gzmc": ""
      };
      this.getList(this.data);
  }


  ionViewDidLoad() {

  }

  search(refresher: Refresher, key) {
    
    this.list = [];
    this.data.PageIndex = 0;
    this.getList(this.data);

    setTimeout(() => {
      console.log('数据加载完成');
      refresher.complete();
    }, 2000);
 }


  doRead(id, name) {
    let modal = this.modalCtrl.create("JobTypesSetAddPage", {"id": id, "name": name});
    modal.present();
    modal.onDidDismiss(data => {
        this.doRefresh(null);
    });
  }

  doWrite() {
      let modal = this.modalCtrl.create("JobTypesSetAddPage");
      modal.present();
      modal.onDidDismiss(data => {
        this.doRefresh(null);
      });
      // this.navCtrl.push(MailWrite);
  }

  delete(id: string) {
    this.jobTypeSetService.del({"id": id}).subscribe(resJson => {
      if (resJson.Result){
        this.nativeService.showToast("删除成功", 500);
        this.doRefresh(null);
      }else{
        this.nativeService.showToast(resJson.Data, 800);
      }
    });
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
    // this.list = [
    //   {
    //     "Id": 1,
    //     "Name": '工种名称1',
    //     "Category": '教务人员	',
    //     "Remarks": ''
    //   },
    //   {
    //     "Id": 2,
    //     "Name": '工种名称2',
    //     "Category": '后勤人员	',
    //     "Remarks": '我是备注'
    //   },
    // ];
    data.gzmc = this.searchKey;
    this.jobTypeSetService.getList(data)
    .subscribe((resJson) => {
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
