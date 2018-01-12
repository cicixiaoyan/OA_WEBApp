import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';
import { Storage } from '@ionic/storage';
import { Response } from "@angular/http";
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Observable';
import { HttpService } from '../../../../providers/HttpService';

@IonicPage()
@Component({
    selector: 'page-contract-choose',
    templateUrl: 'contract-choose.html',
})
export class ContractChoosePage {


    dept: string;
    deptItems: any = [];
    items: any = [];
    haveAffix: boolean = false;
    HtID: string;
    name: string;
    Result: Object = {}; // 最终返回结果

    constructor(private navParams: NavParams,
                public viewCtrl: ViewController,
                public storage: Storage,
                public httpService: HttpService) {
        this.HtID = this.navParams.get("HtID");
        this.initializeItems();
    }

    initializeItems() {
        this.httpService.postFormData("ashx/BmLs.ashx", {})
            .map((res: Response) => res.json())
            .subscribe((resJson) => {
                if (resJson.Result) {
                    this.deptItems = resJson.Data;
                }
            });
        this.search();
    }

    getItems(ev) {
        // Reset items back to all of the items
        this.initializeItems();

        // set val to the value of the ev target
        let val = ev.target.value;
        this.name = val;
        // if the value is an empty string don't filter the items
        // if (val && val.trim() != '') {
        //   this.items = this.items.filter((item) => {
        //     return (item.toLowerCase().indexOf(val.toLowerCase()) > -1);
        //   });
        // }
    }

    getRecipientsByDept(id?) {
        let data = !!id ? { "deptId": id } : {};
        let that = this;     
        this.httpService.postFormData("ashx/hrcontract.ashx", data)
            .map((res: Response) => res.json())
            .subscribe((result) => {
                console.log(result);
                this.items = result.map(function(value, index) {
                    if (value.HtID == that.HtID) Object.assign(value, { checked: true });
                    else Object.assign(value, { checked: false });
                    return value;
                });
            });
    }

    search() {
        console.log('change');
        let that = this;       
        let data = (this.name !== "") ? {name: name} : {};
        this.httpService.postFormData("ashx/UserSheet.ashx", data)
        .map((res: Response) => res.json())
        .subscribe((result) => {
            console.log(result);
            if (result.Result){
                this.items = result.map(function(value, index) {
                    if (value.HtID == that.HtID) Object.assign(value, { checked: true });
                    else Object.assign(value, { checked: false });
                    return value;
                });
            }
        });
    }

    checkContract(Index: number) { // 单选
        this.items.forEach((value, index) => {
            if (Index === index) value.checked = true;
            else value.checked = false;
        });
    }

    confirm() {
        console.log(confirm);

        for (let value of this.items) {
            if (value.checked) {
                this.Result = value;
            }
        }
        this.viewCtrl.dismiss(this.Result);
    }
}
