import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, Refresher } from 'ionic-angular';
// import { AnnouncementDetailPage } from './announcement-detail/announcement-detail';
import { AnnouncementService } from './announcementService';

/**
 * Generated class for the AnnouncementPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-announcement',
  templateUrl: 'announcement.html',
})
export class AnnouncementPage {

  nxPage: any = "AnnouncementDetailPage";
  params: any;
  items: any;
  checkBtn = { "enter": true, "published": false, "all": false };
//   page: number = 1;
//   size: number = 1;
  moredata: boolean = true; // 是否能加载更多
  isEmpty: boolean = false; // 是否无数据
  data: any;
  pageSlides: Array<string> = ["待发布", "已发布", "全部"];
  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              private announcementService: AnnouncementService) {
      this.items = [];
      this.data = {
        "UserId": this.announcementService.httpService.globalData.Uid,
        "PageIndex": 0,
        "PageSize": 10,
        "Status": this.announcementService.announcementStatus["enter"]
      };
      this.initializeItems();
  }

  initializeItems() {
    this.getList();
  }

  doRefresh(refresher: Refresher) {
      this.data.PageIndex = 0;
      this.initializeItems();
      setTimeout(() => {
          console.log('数据加载完成');
          refresher.complete();
      }, 1000);
  }

  doInfinite(): Promise<any> {
      if (this.moredata) {
          this.data.PageIndex++;
          this.getList();

      }

      return new Promise((resolve) => {
          setTimeout(() => {
              resolve();
          }, 500);
      });
  }

  
    // 选择录入、已发布、全部
    onSlideClick(i: number) {
        this.data.PageIndex = 0;
        this.items = [];
        if (i === 0) {
            // 参数设置
            this.data.Status = this.announcementService.announcementStatus["enter"];
        }
        else if (i === 1) {
            // 参数设置
            this.data.Status = this.announcementService.announcementStatus["published"];
        }
        else {
            // 参数设置
            this.data.Status = this.announcementService.announcementStatus["all"];
        }
        this.getList();
    }

  private getList() {
      this.announcementService.getList(this.data).subscribe((resJson) => {
        if (resJson.Result && resJson.Data.length !== 0 && typeof(resJson.Data) !== "string"){
            this.moredata = true;
            this.isEmpty = false;
            let list = resJson.Data;
            this.items = [...this.items, ...list];
        }else{
            this.moredata = false;
            this.isEmpty = this.data.PageIndex == 0 ? true : false;
        }
      });
    //   return this.httpService.postFormData("ashx/Notice.ashx/noticeall", data).map(Response => Response.json());
  }

  ionViewDidLoad() {
      console.log('ionViewDidLoad Notice');
  }

  itemSelected() {

  }



}
