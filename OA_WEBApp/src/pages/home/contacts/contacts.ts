import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, Refresher } from 'ionic-angular';
import { HttpService } from "../../../providers/HttpService";
import { ContactsDetail } from './contacts-detail/contacts-detail';

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
    searchKey: string;
    nxPage: any = ContactsDetail;
    params: any = { id: 42 };
    items;
    page: number = 1;
    size: number = 1;
    moredata: boolean = true;

    constructor(public navCtrl: NavController,
        public navParams: NavParams,
        public httpService: HttpService) {
        this.initializeItems();

    }

    doRefresh(refresher: Refresher) {
        this.page = 1;
        this.size = 1;
        this.initializeItems();
        setTimeout(() => {
            console.log('数据加载完成');
            refresher.complete();
        }, 2000);
    }

    doInfinite(): Promise<any> {
        if (this.moredata) {
            this.size++;
            const data = { page: this.page, size: this.size };
            this.getList(data).subscribe(list => {
                if (list === []) {
                    this.moredata = false;
                } else {
                    this.items = this.items.concat(list);
                }
            });
        }

        return new Promise((resolve) => {
            setTimeout(() => {
                resolve();
            }, 500);
        });
    }

    initializeItems() {
        this.getList().subscribe(list => {
            this.items = list;
        });
        // let data={action: "Yh_List", page: 1, size: 1};
        // this.httpService.postFormData("ashx/MailList.ashx/Yh_List",data)
        //   .map(Response => Response.json())
        //   .subscribe(list => {
        //     this.items = list;
        //   });

        // 假数据
        // this.items = [
        //        {"ui_id":"admin","ui_desc":"系统管理员","ui_sex":"男","ui_lx":"总部","zwmc":"员工"},
        //        {"ui_id":"admin1","ui_desc":"系统管理员1","ui_sex":"男","ui_lx":"总部","zwmc":"员工1"},
        //        {"ui_id":"admin2","ui_desc":"系统管理员2","ui_sex":"男","ui_lx":"总部","zwmc":"员工2"},
        //        {"ui_id":"admin3","ui_desc":"系统管理员3","ui_sex":"男","ui_lx":"总部","zwmc":"员工3"},
        //     ];
    }

    private getList(data?) {
        data = !!data ? data : { page: 1, size: 1 };
        data.action = "Yh_List";
        return this.httpService.postFormData("ashx/MailList.ashx/Yh_List", data).map(Response => Response.json());
    }

    ionViewDidLoad() {
        console.log('ionViewDidLoad Contacts');
    }

    search(refresher: Refresher) {
        console.log(this.searchKey);
        this.initializeItems();
        // let data={action: "noticeBykeyWords", page: 1, size: 1,title: "系统管理员"};
        // this.httpService.postFormData("ashx/MailList.ashx/noticeBykeyWords",data)
        //   .map(Response => Response.json())
        //   .subscribe(list => {
        //     this.items = list;
        //   });

        // setTimeout(() => {
        //   console.log('数据加载完成');
        //   refresher.complete();
        // }, 2000);
    }

}
