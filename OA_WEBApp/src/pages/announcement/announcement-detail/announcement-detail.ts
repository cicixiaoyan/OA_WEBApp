import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { NativeService } from "../../../providers/NativeService";
import { AnnouncementService } from '../announcementService';
import { FileService } from "../../../providers/FileService";
import { GlobalData } from "../../../providers/GlobalData";

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
  attObj: any;
  hasAtt: boolean = false;
  downloaded: boolean = false;

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              public announcementService: AnnouncementService,
              private fileService: FileService,
              public globalData: GlobalData,
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
          this.attObj = resJson.Data[0];
          this.hasAtt = true;
        }else{
          this.attObj = {};
        }
    });

    this.myDiv = this.item.AnnouncementTitle;
  }

  download(path, name) {
      const target = path.split("/").pop();
      // let url = "http://192.168.0.49:789/Attach/flow/Work/201111302315473908417.pdf";
      let url = this.globalData.FILE_SERVE_URL + "Attach/flow/Work/" + path;
      this.fileService.download1(url, target).subscribe((path) => {
        this.downloaded = true;
        this.fileService.openFile(path).subscribe(() => {
          
        });
      });
  }

}
