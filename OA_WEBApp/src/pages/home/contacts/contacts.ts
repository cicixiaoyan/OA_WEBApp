import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HttpService } from "../../../providers/HttpService";
import {ContactsDetail} from './contacts-detail/contacts-detail';

/**
 * Generated class for the Contacts page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-contacts',
  templateUrl: 'contacts.html',
})
export class Contacts {
  searchKey:string;
  nxPage: any = ContactsDetail;
  params: any = {id: 42};
  items;

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              public httpService: HttpService) {
    this.initializeItems();

  }

  initializeItems() {
    // let data={action: "Yh_List", page: 1, size: 1};
    // this.httpService.postFormData("ashx/MailList.ashx/Yh_List",data)
    //   .map(Response => Response.json())
    //   .subscribe(list => {
    //     this.items = list;
    //   });
    this.items = [
           {"ui_id":"admin","ui_desc":"系统管理员","ui_sex":"男","ui_lx":"总部","zwmc":"员工"},
           {"ui_id":"admin1","ui_desc":"系统管理员1","ui_sex":"男","ui_lx":"总部","zwmc":"员工1"},
           {"ui_id":"admin2","ui_desc":"系统管理员2","ui_sex":"男","ui_lx":"总部","zwmc":"员工2"},
           {"ui_id":"admin3","ui_desc":"系统管理员3","ui_sex":"男","ui_lx":"总部","zwmc":"员工3"},
        ];
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Contacts');
  }

  search(event){
    // let data={action: "noticeBykeyWords", page: 1, size: 1,title: "" + escape(key) + ""};
    // this.httpService.postFormData("ashx/MailList.ashx/noticeBykeyWords",data)
    //   .map(Response => Response.json())
    //   .subscribe(list => {
    //     this.items = list;
    //   });
  }

}
