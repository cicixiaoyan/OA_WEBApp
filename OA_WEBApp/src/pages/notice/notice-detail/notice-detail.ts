import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';
import { HttpService } from "../../../providers/HttpService";
import { NativeService } from "../../../providers/NativeService";
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
  detailNotice: any = [];
  myDiv: string = '';
  contentHtml: any;
  downloadProgress: any;
  constructor(public navCtrl: NavController, 
              public navParams: NavParams,
              public httpService: HttpService,
              private toastCtrl: ToastController,
              private nativeService: NativeService) {
    this.initializeItems();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad NoticeDetail');
  }

  initializeItems(){
    // let data={id: this.navParams.get('id'),action:"noticeById"};
    // this.httpService.postFormData("ashx/Notice.ashx/noticeById",data)
    //   .map(Response => Response.json())
    //   .subscribe(list => {
    //       if(!!list && list.length != 0 ){
    //         this.detailNotice = list[0];
    //         this.myDiv = this.detailNotice.ggnr;
    //       }else{
    //          this.toastCtrl.create({
    //           message: '服务器出错，请稍后再试！！！',
    //           position: 'middle',
    //           duration: 2000
    //         }).present();
    //         this.navCtrl.pop();
    //       }
    //   });

    this.detailNotice = {
      "gglb": "活动安排",
      "ggzt": "公告标题公告标题公告标题公告标题公告标题公告标题",
      "lrsj": "2017-12-12T12:12:12",
      "kssj": '2017-12-12T12:12:12',
      "jssj": "2017-12-12T12:12:12",
      "ggnr": "<p>公告内容公告内容公告内容公告内容公告内容公告内容公告内容公告内容</p><div>hahah</div>",
      "lrr": "系统管理员",
      "attName": "123.png",
      "ggfj": "http:wwwwfrfge.html"
    };
    this.myDiv = this.detailNotice.ggnr;
  }

  download(path){
    const target = path.split("/").pop();
    this.nativeService.download(path, target);
  }

}
