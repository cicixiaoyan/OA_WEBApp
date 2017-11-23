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
    isEmpty: boolean = false;

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
            this.getList(data).subscribe(resJson => {
                if (resJson.Result && resJson.Result !== []){
                    this.items = this.items.concat(resJson.Data);
                } else {
                    this.moredata = false;
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
        this.getList().subscribe(resJson => {
            if (resJson.Result && resJson.Result !== []){
                this.items = resJson.Data;
                this.isEmpty = false;
            } else {
                this.isEmpty = true;
                this.moredata = false;
                this.httpService.nativeService.showToast(resJson.Data || "无数据");
            }
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
        return this.httpService.postFormData("ashx/UserSheet.ashx", data).map(Response => Response.json());
    }

    ionViewDidLoad() {
        console.log('ionViewDidLoad Contacts');
    }

    search(refresher: Refresher) {
        console.log(this.searchKey);
        this.initializeItems();
        return this.httpService.postFormData("ashx/UserSheet.ashx", {"Name": this.searchKey})
        .map(Response => Response.json())
        .subscribe((resJson) => {
            if (resJson.Result){
                this.items = resJson.Data;
                this.isEmpty = false;
            }else{
                this.items = [];
                this.isEmpty = true;
                this.moredata = false;
            }
        });


        // setTimeout(() => {
        //   console.log('数据加载完成');
        //   refresher.complete();
        // }, 2000);
    }

}
