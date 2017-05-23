import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,ModalController,Refresher } from 'ionic-angular';

import { MailRead} from '../mail/mail-read/mail-read';
import { MailWrite} from '../mail/mail-write/mail-write';
import { MailReadOutbox} from '../mail/mail-read-outbox/mail-read-outbox';
import { MailService } from "./mailService";
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
    inbox: boolean = true;//默认为收件箱
    isDraft: boolean = false;//默认为发件箱
    isEmpty: boolean = false;
    checkBtn: object = { "read": false, "unread": true, "all": false };
    inboxList: any =[];
    outboxList : any = [];
    moredata : boolean = true;
    inboxData: { "size": 1, "page":1 };
    outboxData: { "size": 1, "page":1 };

    constructor(public navCtrl: NavController,
                public navParams: NavParams,
                private modalCtrl: ModalController,
                private mailService: MailService) {
        this.initializeItems();
}

    initializeItems(){
        this.mailService.getInboxList().subscribe(list => {
            this.inboxList = list;
            console.log(this.inboxList);
        });

        this.mailService.getOutboxList().subscribe(list => {
            this.outboxList = list;
            console.log(this.outboxList);
        })

        //默认为收件箱和草稿箱
        // this.checkRead("read");
        // this.checkDraft(true); 
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Mail');
  }

  //选择已读、未读、全部
    checkRead(name: string = "unread" , data: {page:1,size:1}) {
        this.checkBtn = { "read": false, "unread": false, "all": false };
        this.checkBtn[name] = true;
        if( name === "unread") {
            //参数设置
        }
        else if( name === "read" ) {
            //参数设置
        }
        else {
            //参数设置
        }
        this.mailService.getOutboxList(data).subscribe(list => { 
            if(list==[]){
                this.moredata = false;
            }else{
                this.outboxList = this.outboxList.concat(list);
            }
        });
  }

  //选择草稿箱、发件箱
    checkDraft(bol: boolean = false, data: {page:1,size:1}) {

        this.outboxList = (data.page==1) ? [] : this.outboxList;

        if (bol) {
            this.isDraft = true;
            //参数设置
        } else {
            this.isDraft = false;
            //参数设置
        }
        this.mailService.getOutboxList(data).subscribe(list => { 
            if(list==[]){
                this.moredata = false;
            }else{
                this.outboxList = this.outboxList.concat(list);
            }
        });
    }


    doRead(id){
        this.navCtrl.push(MailRead,{id:id});
    }

    doReadOutBox(id){
        this.navCtrl.push(MailReadOutbox,{id:id});
    }

    doWrite(){
        let modal = this.modalCtrl.create(MailWrite);
        modal.present();
        modal.onDidDismiss(data => {
            data && console.log(data);
        });
            // this.navCtrl.push(MailWrite);
    }

    doRefresh(refresher: Refresher){
        this.initializeItems();
        setTimeout(() => {
        console.log('数据加载完成');
        refresher.complete();
        }, 1000);
    }

    doInfinite(): Promise<any> {
        if(this.moredata){
            if(this.box === "inbox"){
                this.inboxData.page++; 
                this.mailService.getInboxList().subscribe(list => {
                    
                });
            }else{
                this.outboxData.page++;
                this.mailService.getOutboxList().subscribe(list => {

                });
            }
        }

        return new Promise((resolve) => {
            setTimeout(() => {
                resolve();
            }, 500);
        })
    }

}
