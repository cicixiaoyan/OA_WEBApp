import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, Refresher } from 'ionic-angular';
import { HttpService } from "../../../providers/HttpService";
// import { ContactsDetail } from './contacts-detail/contacts-detail';

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
    searchKey: string = "";
    nxPage: any = "ContactsDetail";
    params: any;
    items;
    moredata: boolean = true;
    isEmpty: boolean = false;

    constructor(public navCtrl: NavController,
                public navParams: NavParams,
                public httpService: HttpService) {
        this.initializeItems();
    }

    doRefresh(refresher: Refresher) {
        this.initializeItems();
        setTimeout(() => {
            console.log('数据加载完成');
            refresher.complete();
        }, 2000);
    }

    private initializeItems() {
        this.httpService.postFormData("ashx/UserSheet.ashx", {"Name": this.searchKey})
        .map(Response => Response.json())
        .subscribe(resJson => {
            if (resJson.Result  && resJson.Data.length !== 0 && typeof(resJson.Data) !== "string"){
                this.items = resJson.Data;
                this.isEmpty = false;
            } else {
                this.isEmpty = true;
                this.moredata = false;
                this.httpService.nativeService.showToast(resJson.Data || "无数据");
            }
        });
    }

    search(refresher: Refresher, key) {
        this.initializeItems();
        return this.httpService.postFormData("ashx/UserSheet.ashx", {"Name": key.trim()})
        .map(Response => Response.json())
        .subscribe((resJson) => {
            if (resJson.Result && resJson.Data.length !== 0 && typeof(resJson.Data) !== "string"){
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
