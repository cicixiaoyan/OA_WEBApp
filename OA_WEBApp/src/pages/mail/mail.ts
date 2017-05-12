import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,ModalController } from 'ionic-angular';

import { MailRead} from '../mail/mail-read/mail-read';
import { MailWrite} from '../mail/mail-write/mail-write';
/**
 * Generated class for the Mail page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-mail',
  templateUrl: 'mail.html',
})
export class Mail {
  box: string = "inbox";
  inbox: boolean = true;
  isDraft: boolean = true;
  checkBtn: object = { "read": false, "unread": true, "all": false };
  inboxList: any =[];
  outboxList : any = [];
  constructor(public navCtrl: NavController, public navParams: NavParams,private modalCtrl:ModalController) {
    this.initializeItems();
}

  initializeItems(){
      this.inboxList = [{
            jsyjid: "1",
            jsbt: "信息主题1", //接受主题
            fsrName: "系统管理员", //发送人姓名
            fsrID: "121", //发送人id
            fssj: "2012-12-12 12:12:12", //接收时间
            jssj: "2012-12-12 12:12:12", //发送时间
            jsrIDs: "123,456,789", //接收人ids
            jsnr: "新公章[公章]发布，默认密码为123456，请您尽快修改密码！", //接受内容
            yjfj: "", //--邮件附件
            jszt: "已读" //zhuagt
        },{
            jsyjid: "2",
            jsbt: "信息主题2", //接受标题
            fsrName: "系统管理员", //发送人姓名
            fsrID: "121", //发送人id
            fssj: "2012-12-12 12:12:12", //接收时间
            jssj: "2012-12-12 12:12:12", //发送时间
            jsrIDs: "123,456,789", //接收人ids
            jsnr: "新公章[公章]发布，默认密码为123456，请您尽快修改密码！", //接受内容
            yjfj: "236.png", //--邮件附件
            jszt: "未读" //状态
        }
    ];

    this.outboxList = [
        {
            jsyjid: "1",
            jsbt: "信息主题3", //接受主题
            fsrName: "系统管理员", //发送人姓名
            fsrID: "121", //发送人id
            fssj: "2012-12-12 12:12:12", //接收时间
            jssj: "2012-12-12 12:12:12", //发送时间
            jsrIDs: "123,456,789", //接收人ids
            jsnr: "你该交作业了3", //接受内容
            yjfj: "", //--邮件附件
            jszt: "已读" //zhuagt
        },{
            jsyjid: "2",
            jsbt: "信息主题4", //接受标题
            fsrName: "系统管理员", //发送人姓名
            fsrID: "121", //发送人id
            fssj: "2012-12-12 12:12:12", //接收时间
            jssj: "2012-12-12 12:12:12", //发送时间
            jsrIDs: "123,456,789", //接收人ids
            jsnr: "你该交作业了4", //接受内容
            yjfj: "236.png", //--邮件附件
            jszt: "未读" //状态
        }
    ];
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Mail');
  }

  //选择已读、未读、全部
  check(name) {
    this.checkBtn = { "read": false, "unread": false, "all": false };
    this.checkBtn[name] = true;
    if( name = "unread") {
        
    }
  }

  //选择草稿箱、发件箱
   checkDraft(bol) {
        if (bol) {
            this.isDraft = true;
        } else {
            this.isDraft = false;
        }
    }

    doRead(id){
      this.navCtrl.push(MailRead,{id:id});
    }

    doWrite(){
      let modal = this.modalCtrl.create(MailWrite);
      modal.present();
      modal.onDidDismiss(data => {
        data && console.log(data);
      });
        // this.navCtrl.push(MailWrite);
    }

    doRefresh() {

    }

    loadMore() {

    }
  

}
