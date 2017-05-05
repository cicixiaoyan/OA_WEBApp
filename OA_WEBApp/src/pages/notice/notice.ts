import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { NoticeDetail } from './notice-detail/notice-detail';
/**
 * Generated class for the Notice page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-notice',
  templateUrl: 'notice.html',
})
export class Notice {
  nxPage: any = NoticeDetail;
  params: any = {id: 42};
  searchKey:string;
  items;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
      this.initializeItems();
  }

  initializeItems() {
    this.items = [
           {"ggid":"1","gglb":"公告类型","ggzt":"公告主题","lrr":"发布者","lrsj":"2012-12-12 12:12"},
           {"ggid":"2","gglb":"公告类型2","ggzt":"公告主题2","lrr":"发布者2","lrsj":"2012-12-12 12:12"},
           {"ggid":"3","gglb":"公告类型3","ggzt":"公告主题3","lrr":"发布者3","lrsj":"2012-12-12 12:12"},
           {"ggid":"4","gglb":"公告类型4","ggzt":"公告主题4","lrr":"发布者4","lrsj":"2012-12-12 12:12"}
        ];
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Notice');
  }

  itemSelected(){}

  search(key){
    alert(this.searchKey)
  }
}
