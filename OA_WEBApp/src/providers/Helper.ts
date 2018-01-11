import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';
import { ModalController, Events } from "ionic-angular";

import { JPush } from 'ionic3-jpush';
import { FileService } from "./FileService";
import { NativeService } from './NativeService';
import { GlobalData } from './GlobalData';

/**
 * Helper类存放和业务有关的公共方法
 * @description
 */
@Injectable()
export class Helper {

    constructor(private modalCtrl: ModalController,
                private storage: Storage,
                private nativeService: NativeService,
                private jPush: JPush,
                private events: Events,
                private globalData: GlobalData,
                private fileService: FileService) {
    }

  /**
   * 极光推送
   */
  initJpush() {
    if (!this.nativeService.isMobile()) {
      return;
    }
    this.jPush.init();
    // if (this.nativeService.isIos()) {
    //   this.jPush.setDebugModeFromIos();
    // } else {
    //   this.jPush.setDebugMode(true);
    // }

    this.jPushAddEventListener();
  }

  private jPushAddEventListener() {
    this.jPush.getUserNotificationSettings().then(result => {
      if (result == 0) {
        console.log('系统设置中已关闭应用推送');
      } else if (result > 0) {
        console.log('系统设置中打开了应用推送');
      }
    });

    // 点击通知进入应用程序时会触发的事件
    document.addEventListener("jpush.openNotification", event => {
      this.setIosIconBadgeNumber(0);
      let content = this.nativeService.isIos() ? event['aps'].alert : event['alert'];
      console.log("jpush.openNotification" + content);
      this.events.publish('jpush.openNotification', content);
    }, false);

    // 收到通知时会触发该事件
    document.addEventListener("jpush.receiveNotification", event => {
      let content = this.nativeService.isIos() ? event['aps'].alert : event['alert'];
      console.log("jpush.receiveNotification" + content);
    }, false);

    // 收到自定义消息时触发这个事件
    document.addEventListener("jpush.receiveMessage", event => {
      let message = this.nativeService.isIos() ? event['content'] : event['message'];
      console.log("jpush.receiveMessage" + message);
    }, false);


    // //设置标签/别名回调函数
    // document.addEventListener("jpush.setTagsWithAlias", event => {
    //   console.log("onTagsWithAlias");
    //   let result = "result code:" + event['resultCode'] + " ";
    //   result += "tags:" + event['tags'] + " ";
    //   result += "alias:" + event['alias'] + " ";
    //   console.log(result);
    // }, false);

  }

  // 设置标签
  setTags() {
    if (!this.nativeService.isMobile()) {
      return;
    }
    let tags = [];
    if (this.nativeService.isAndroid()) {
      tags.push('android');
    }
    if (this.nativeService.isIos()) {
      tags.push('ios');
    }
    console.log('设置setTags:' + tags);
    this.jPush.setTags({ "sequence": 2, "tags": tags });
  }

  // 设置别名,一个用户只有一个别名
  setAlias(id?) {
    if (!this.nativeService.isMobile()) {
      return;
    }
    // console.log('设置setAlias:' + this.globalData.Uid);
    // this.jPush.setAlias('' + this.globalData.Uid);//ios设置setAlias有bug,值必须为string类型,
    this.jPush.setAlias({ "sequence": 1, "alias": ['' + id || this.globalData.Uid] });
  }

//   setTagsWithAlias(userId) {
//     if (!this.nativeService.isMobile()) {
//       return;
//     }
//     console.log('设置setTagsWithAlias:' + userId);
//     this.jPush.setTagsWithAlias(['man', 'test'], '' + userId);
//   }

  // 设置ios角标数量
  setIosIconBadgeNumber(badgeNumber) {
    if (this.nativeService.isIos()) {
      this.jPush.setBadge(badgeNumber); // 上传badge值到jPush服务器
      this.jPush.setApplicationIconBadgeNumber(badgeNumber); // 设置应用badge值
    }
  }


}
