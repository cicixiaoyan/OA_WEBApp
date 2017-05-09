import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HttpService } from "../../../providers/HttpService";
/**
 * Generated class for the NoticeDetail page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-notice-detail',
  templateUrl: 'notice-detail.html',
})
export class NoticeDetail {
  detailNotice:any;
  myDiv:string = '';
  contentHtml:any;
  downloadProgress:any;
  constructor(public navCtrl: NavController, public navParams: NavParams,public httpService:HttpService) {
    console.log(this.navParams.get('id'));
    this.initializeItems();
    
  }


  initializeItems(){
    // let data={id: this.navParams.get('id'),action:"noticeById"};
    // this.httpService.postFormData("ashx/Notice.ashx/noticeById",data)
    //   .map(Response => Response.json())
    //   .subscribe(list => {
    //     this.detailNotice = list[0];
    //   });
    this.detailNotice = {
      "gglb":"活动安排",
      "ggzt":"公告标题公告标题公告标题公告标题公告标题公告标题",
      "lrsj":"2017-12-12T12:12:12",
      "kssj":'2017-12-12T12:12:12',
      "jssj":"2017-12-12T12:12:12",
      "ggnr":"<p>公告内容公告内容公告内容公告内容公告内容公告内容公告内容公告内容</p><div>hahah</div>",
      "lrr":"系统管理员",
      "attName":"",
      "ggfj":""
    };
    
    this.myDiv = this.detailNotice.ggnr;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad NoticeDetail');
  }

  ionViewWillEnter() {
       let elements = document.querySelectorAll(".tabbar");
    if (elements != null) {
        Object.keys(elements).map((key) => {
            elements[key].style.display = 'none';
        });
    } 
  }
  ionViewCanLeave() {
    let elements = document.querySelectorAll(".tabbar");
    if (elements != null) {
        Object.keys(elements).map((key) => {
            elements[key].style.display = 'flex';
        });
    }
  }
}
