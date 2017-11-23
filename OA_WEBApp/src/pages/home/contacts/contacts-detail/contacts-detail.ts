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
    checkman: any = {};
    constructor(public navCtrl: NavController,
                public navParams: NavParams,
                public httpService: HttpService) {
        this.initializeItems();

    }
    initializeItems() {
        return this.httpService.postFormData("ashx/UserInfo.ashx", {"Id": this.navParams.get("id")})
            .map(Response => Response.json())
            .subscribe((resJson) => {
                if (resJson.Result){
                    this.checkman = resJson.Data;
                    console.log(resJson.Data);
                }else{
                    this.checkman = {};
                }
            });
    }


    ionViewDidLoad() {
        console.log('ionViewDidLoad ContactsDetail');
    }
    call(num) {
        window.location.href = "tel:" + num;
    }

}
