import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { NativeService } from '../../../providers/NativeService';
import { HttpService } from "../../../providers/HttpService";
/**
 * Generated class for the AboutusPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-aboutus',
  templateUrl: 'aboutus.html',
})
export class AboutusPage {

  data : any;

  period: string = "2017";

  updateStr: string = "检查更新";

  constructor(public navCtrl: NavController, 
              public navParams: NavParams,
              public nativeService: NativeService,
              public httpService: HttpService) {
      this.data = {
        "version": "V0.0.1",
        "appName": "成都永朔科技有限公司",
        "logo": "assets/img/logo.png",
        "copyright": "成都永朔科技有限公司所有"
      };
      let thisYear = new Date().getFullYear(); 
      this.period = (thisYear === 2017) ? "2017" : "2017 - " + thisYear;

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AboutusPage');
  }

  detectionUpgrade() {
    let version = this.nativeService.getVersionNumber();
    // 从服务器获取最新版本号
    this.httpService.get("url").map(res => res.json)
      .subscribe(item => {
        if (item[0].version == version) {
          return this.updateStr = "已是最新版";
        }else {
          this.nativeService.detectionUpgrade();
        }
      });
  }
}
