import { LoginService } from './../login/LoginService';
import { Component, ViewChild, ViewEncapsulation } from '@angular/core';
import { IonicPage, NavController, Nav, NavParams, ModalController, Events } from 'ionic-angular';
import { Storage } from '@ionic/storage';
// import { QuillEditorComponent } from 'ngx-quill/src/quill-editor.component';           
export interface HomePageInterface {
    title: string;
    component: any;
    icon: string;
    index?: number;
    color: string;
}

// import Quill from 'quill';

// // override p with div tag
// const Parchment = Quill.import('parchment');
// let Block = Parchment.query('block');

// Block.tagName = 'DIV';
// // or class NewBlock extends Block {}; NewBlock.tagName = 'DIV';
// Quill.register(Block /* or NewBlock */, true);

// import Counter from '../../directives/counter';
// Quill.register('modules/counter', Counter);

// // Add fonts to whitelist
// let Font = Quill.import('formats/font');
// // We do not add Aref Ruqaa since it is the default
// Font.whitelist = ['mirza', 'aref', 'sans-serif', 'monospace', 'serif'];
// Quill.register(Font, true);


@IonicPage()
@Component({
    selector: 'page-home',
    templateUrl: 'home.html',
    encapsulation: ViewEncapsulation.None
})


export class Home {
    // @ViewChild('editor') editor: QuillEditorComponent;
    @ViewChild(Nav) nav: Nav;
    // set our app's pages
    appPages: HomePageInterface[] = [
        { title: '消息', component: "MessagePage", index: 1, icon: 'ios-mail', color: "positive" },
        { title: '公告管理', component: "AnnouncementPage", icon: 'ios-notifications', color: "royal" },
        { title: '通讯录', component: "Contacts", icon: 'md-call', color: "energized" },
        { title: '待办事项', component: "Backlog", index: 2, icon: 'ios-calendar', color: "assertive" },
        // { title: '新建工作', component: Newwork, icon: 'md-exit', color: "balanced" },
        // { title: '设置', component: "TabsPage", index: 3, icon: 'ios-cog', color: "calm" },
        { title: '短信', component: "SmsPage", icon: 'ios-cog', color: "calm" },
        { title: '邮件', component: "Mail",  icon: 'ios-cog', color: "calm" },
        // { title: '会议', component: "MeetingPage",  icon: 'ios-cog', color: "calm"},
        // { title: '车辆', component: "CarPage",  icon: 'ios-cog', color: "calm"}
    ];
   
    richText: string = "1";
    totalMenu = {
        "我的会议": false,
        "会议记录": false,
        "会议查询": false,
        "会议室管理": false,

        "车辆档案": false,
        "司机档案": false,
        "车辆申请": false,
        "车辆调度": false,

        "员工档案维护": false,
        "工种设置": false,
        "合同查询": false,
        "合同续签": false,
        "申请档案查看": false,
        "档案申请审批": false,

        "员工考勤设定": false,
        "考勤审批说明": false,
    };

    constructor(public navCtrl: NavController, public navParams: NavParams, private modalCtrl: ModalController,
                public storage: Storage, private loginService: LoginService, public events: Events) {
        this.storage.get("menus").then(Menu => {
            if (!!Menu)  this.setMenu(Menu);
        });
        this.events.subscribe('menu:open', Menu => {
            this.setMenu(Menu);
        });

    }

    ionViewDidEnter(){
        // this.navCtrl.parent.select(3);
    }
    
    private setMenu(menu){
        // console.log(menu, typeof(menu));
        for (let value of menu){
            for (let i in this.totalMenu){
                
                if (value == i) {
                    this.totalMenu[i] = true;
                }
            }
        }
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

    open(name) {
        this.navCtrl.push(name);
    }

}
