import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';
import { Response } from "@angular/http";
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Observable';
import { HttpService } from '../../../../providers/HttpService';
import { NativeService } from '../../../../providers/NativeService';
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
                private nativeService: NativeService,
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
                }else{
                    
                    this.nativeService.showToast(resJson.Data);
                }
            });
        this.search();
    }

    getRecipientsByDept(id?) {
        let data = !!id ? { "deptid": id,  "verb": 5 } : { "verb": 5};
        let that = this;     
        this.httpService.postFormData("ashx/hrcontract.ashx", data)
            .map((res: Response) => res.json())
            .subscribe((resJson) => {
                if (resJson.Result) {
                    console.log(resJson);
                    this.items = resJson.Data.map(function (value, index) {
                        if (value.HtID == that.HtID) Object.assign(value, { checked: true });
                        else Object.assign(value, { checked: false });
                        return value;
                    });
                }else{
                    this.items = [];
                    this.nativeService.showToast(resJson.Data);
                }
            });
    }

    search() {
        console.log('change');
        let that = this;       
        let data = (this.name != "") ? {"xm": name, "verb": 5} : {"verb": 5};
        this.httpService.postFormData("ashx/hrcontract.ashx", data)
        .map((res: Response) => res.json())
        .subscribe((resJson) => {
            console.log(resJson);
            if (resJson.Result){
                this.items = resJson.Data.map(function(value, index) {
                    if (value.HtID == that.HtID) Object.assign(value, { checked: true });
                    else Object.assign(value, { checked: false });
                    return value;
                });
            }else{
                this.items = [];
                this.nativeService.showToast(resJson.Data);
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
