import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

// import { UserInfo } from "../../../../model/UserInfo";
import { HttpService } from "../../../../providers/HttpService";

/**
 * Generated class for the ContactsDetail page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-contacts-detail',
  templateUrl: 'contacts-detail.html',
})
export class ContactsDetail {
  // checkman: UserInfo = new UserInfo();
  checkman;
  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              public httpService: HttpService) {
                this.initializeItems();

  }
  initializeItems(){
    // let data={action: "YH_ById", id: this.navParams.get("id")};
    // this.httpService.postFormData("ashx/MailList.ashx/YH_ById",data)
    //   .map(Response => Response.json())
    //   .subscribe(list => {
    //     this.items = list;
    //   });
    this.checkman = {
        ui_bgdh: '123456', // 办公电话
        ui_czdh: '123456', // --内线电话
        ui_desc: '系統管理員', // --用户姓名
        ui_id: 'admin', // 编号
        ui_lx: 'string', // --用户类型
        ui_mail: '123@qq.com', // 邮箱

        ui_role: '員工', // 角色
        ui_rzrq: '2012-12-12T12:12:12', // 入职日期

        ui_sex: '男', // 性别
        ui_ssbm: '总部', // 部门
        ui_ssgs: '成都永朔科技有限公司', // -所属子公司

        ui_yndx: '123456', // 移动电话
        ui_zw: '无', // 职务
        photo: '无' // 照片暂无
    };
  }


  ionViewDidLoad() {
    console.log('ionViewDidLoad ContactsDetail');
  }
  call(num){
    window.location.href = "tel:" + num;
  }

}
