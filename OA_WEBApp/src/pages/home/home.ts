import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, Nav, NavParams } from 'ionic-angular';
import { Storage } from '@ionic/storage';
// import { LoginPage } from '../login/login';
// import { TabsPage } from "../tabs/tabs";
// import { MessagePage } from '../message/message';
// import { Backlog } from "../home/backlog/backlog";
// import { Contacts } from "../home/contacts/contacts";
// import { SmsPage } from '../sms/sms';
// import { Mail } from '../mail/mail';
// import { MeetingPage } from '../meeting/meeting';
// import { Newwork } from '../home/newwork/newwork';


/**
 * Generated class for the Home page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

export interface HomePageInterface {
    title: string;
    component: any;
    icon: string;
    index?: number;
    color: string;
}

@IonicPage()
@Component({
    selector: 'page-home',
    templateUrl: 'home.html',
})


export class Home {

    @ViewChild(Nav) nav: Nav;

    // set our app's pages
    appPages: HomePageInterface[] = [
        { title: '消息', component: "MessagePage", index: 1, icon: 'ios-mail', color: "positive" },
        { title: '公告管理', component: "TabsPage", index: 2, icon: 'ios-notifications', color: "royal" },
        { title: '通讯录', component: "Contacts", icon: 'md-call', color: "energized" },
        { title: '待办事项', component: "Backlog", icon: 'ios-calendar', color: "assertive" },
        // { title: '新建工作', component: Newwork, icon: 'md-exit', color: "balanced" },
        { title: '设置', component: "TabsPage", index: 3, icon: 'ios-cog', color: "calm" },
        { title: '短信', component: "SmsPage", icon: 'ios-cog', color: "calm" },
        { title: '邮件', component: "Mail",  icon: 'ios-cog', color: "calm" },
        { title: '会议', component: "MeetingPage",  icon: 'ios-cog', color: "calm"}
    ];

    constructor(public navCtrl: NavController, public navParams: NavParams, public storage: Storage) {

    }

    ionViewDidLoad() {
        console.log(this.storage.get("UserInfo"));
        console.log('ionViewDidLoad Home');
    }

    openPage(page: HomePageInterface) {
        // the nav component was found using @ViewChild(Nav)
        // reset the nav to remove previous pages and only have this page
        // we wouldn't want the back button to show in this scenario

        if (page.index) {

            this.navCtrl.parent.select(page.index);
            // this.navCtrl.setRoot(page.component, { tabIndex: page.index });
        } else {
            this.navCtrl.push(page.component);
            // this.nav.parent.setRoot(page.component).catch(() => {
            //   console.log("Didn't set nav root");
            // });
        }


    }

}
