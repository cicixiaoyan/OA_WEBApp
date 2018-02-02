// import { LoginService } from './../login/LoginService';
import { Component, ViewChild, ViewEncapsulation } from '@angular/core';
import { IonicPage, NavController, Nav, NavParams, ModalController, Events } from 'ionic-angular';
import { Storage } from '@ionic/storage';

export interface HomePageInterface {
  title: string;
  component: any;
  icon: string;
  index?: number;
  color: string;
}

@IonicPage()
@Component({
  selector: 'page-home-new',
  templateUrl: 'home-new.html',
})
export class HomeNewPage {
  appPages: HomePageInterface[] = [
    { title: '消息', component: "MessagePage", index: 1, icon: 'ios-mail', color: "positive" },
    { title: '公告管理', component: "AnnouncementPage", icon: 'ios-notifications', color: "royal" },
    { title: '通讯录', component: "Contacts", icon: 'md-call', color: "energized" },
    { title: '待办事项', component: "Backlog", index: 2, icon: 'ios-calendar', color: "assertive" },
    { title: '邮件', component: "Mail", icon: 'ios-cog', color: "calm" },
    { title: '设置', component: "TabsPage", index: 3, icon: 'ios-cog', color: "calm" },
  ];

  colorList = [
    "#4ddc9a", "#2fcbdd", "#fb942b", "#d26bd3", "#4f97ec", "#f66b56", "#b6dd2f", "#edc240"
  ];

  list = [
    {
      "name": "会议管理",
      "children": [
        {
          "name": "我的会议",
          "page": "MeetingPage",
          "icon": "icon-huiyikaihuitaolun",
        },
        {
          "name": "会议记录",
          "page": "MeetingMinutesPage",
          "icon": "icon-huiyijiyao",
        },
        {
          "name": "会议查询",
          "page": "MeetingSearchPage",
          "icon": "icon-bhjmeeting",
        },
        {
          "name": "会议室管理",
          "page": "MeetingRoomPage",
          "icon": "icon-huiyishi",
        }
        
      ]
    },
    {
      "name": "车辆管理",
      "children": [
        {
          "name": "司机档案",
          "page": "DriverPage",
          "icon": "icon-sijiguanli",
        },
        {
          "name": "车辆查看",
          "page": "CarPage",
          "icon": "icon-cheliangdangan",
        },
        {
          "name": "车辆申请",
          "page": "VehicleApplicationPage",
          "icon": "icon-icon-test",
        },
        {
          "name": "车辆调度",
          "page": "VehicleSchedulingPage",
          "icon": "icon-cheliangpaiban",
        }
        
      ]
    },
    {
      "name": "人事管理",
      "children": [
        {
          "name": "培训维护",
          "page": "TrainingMaintenancePage",
          "icon": "icon-msnui-maintain",
        },
        {
          "name": "员工档案维护",
          "page": "StaffFileMaintenance",
          "icon": "icon-danganguanli",
        },
        {
          "name": "工种设置",
          "page": "JobTypesSetPage",
          "icon": "icon-type_master",
        },
        {
          "name": "合同查询",
          "page": "ContractListPage",
          "icon": "icon-hetongchaxun1",
        },
        {
          "name": "合同维护",
          "page": "ContractMaintenancePage",
          "icon": "icon-hetong",
        },
        {
          "name": "合同续签",
          "page": "ContractRenewPage",
          "icon": "icon-hetongchaxun1",
        },
        {
          "name": "申请档案查看",
          "page": "FileApplicationListPage",
          "icon": "icon-hetongchaxun1",
        },

        // {
        //   "name": "档案申请审批",
        //   "page": "FileApplicationReviewPage",
        //   "icon": "icon-hetongchaxun1",
        // }
        
      ]
    },
    {
      "name": "考勤管理",
      "children": [
        {
          "name": "假期分组设定",
          "page": "HolidayGroupSettingsPage",
          "icon": "icon-qunzuduoren",
          "show": false
        },
        {
          "name": "员工考勤设定",
          "page": "StaffAttendanceSettingsPage",
          "icon": "icon-kaoqinbiao",
          "show": false
        },
        {
          "name": "考勤审批说明",
          "page": "AttendanceAuditInstructionsPage",
          "icon": "icon-shenpi",
          "show": false
        }
        
      ]
    },
  ];

  constructor(public navCtrl: NavController, 
              public navParams: NavParams, 
              private modalCtrl: ModalController,
              public storage: Storage, public events: Events) {
    this.storage.get("menus").then(Menu => {
      if (!!Menu) this.setMenu(Menu);
    });
    this.events.subscribe('menu:open', Menu =>  this.setMenu(Menu));
  }

  private setMenu(menu) {

    for (let item of this.list) {
      let show = false;
      for (let subitem of item.children) {
        subitem["show"] = false;
        for (let value of menu) {
          if (value == subitem.name) {
            subitem["show"] = true;
            show = true;
            continue;
          }
        }
      }
      
      item["show"] = show;
      
    }

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad HomeNewPage');
  }

  open(name) {
    this.navCtrl.push(name);
  }
  seletcTab(index) {
    this.navCtrl.parent.select(index);
  }

}
