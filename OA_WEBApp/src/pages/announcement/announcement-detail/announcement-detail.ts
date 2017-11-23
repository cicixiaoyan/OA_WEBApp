import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { NativeService } from "../../../providers/NativeService";
import { AnnouncementService } from '../announcementService';

/**
 * Generated class for the AnnouncementDetailPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-announcement-detail',
  templateUrl: 'announcement-detail.html',
})
export class AnnouncementDetailPage {

  myDiv: string = '';
  contentHtml: any;
  downloadProgress: any;
  item: any;
  attObg: any;

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              public announcementService: AnnouncementService,
              private nativeService: NativeService) {
        this.item = this.navParams.get('item');
        this.initializeItems();
  }

  ionViewDidLoad() {
      console.log('ionViewDidLoad AnnouncementDetailPage');
  }

  initializeItems() {
      
      
      this.announcementService.detail(this.item.AnnouncementAtt).subscribe((resJson) => {
          if (resJson.Result && resJson !== []){
            this.attObg = resJson.Data[0];
          }else{
            this.attObg = {};
          }
      });

      this.myDiv = this.item.AnnouncementTitle;
  }

  download(path) {
      const target = path.split("/").pop();
      this.nativeService.download(path, target);
  }

}
