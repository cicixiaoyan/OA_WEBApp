import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

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

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.initializeItems();

  }
	// {{someone.ui_id}}{{someone.ui_desc}}（{{someone.ui_sex}}）
	// 		   	<p class="font-12">{{someone.ui_lx}}&emsp;{{someone.zwmc}}</p>
  initializeItems() {
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
    alert(this.searchKey);
  }

}
