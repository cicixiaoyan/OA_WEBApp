import { Component } from '@angular/core';
import { NavController, NavParams, ViewController } from 'ionic-angular';
import { Storage } from '@ionic/storage';
import { Response } from "@angular/http";
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Observable';
import { HttpService } from './HttpService';

@Component({
    template: `
        <ion-list class="checkpeople-popover">
        <ion-item>
            <ion-label>部门选择</ion-label>
            <ion-select [(ngModel)]="dept" submitText="确定" (ngModelChange)="getRecipientsByDept(dept)"
                cancelText="取消" okText="确定">
                <ion-option  *ngFor="let item of deptItems;let i = index" [value]="item.Id">
                    {{item.BmName}}
                </ion-option>
            </ion-select>
        </ion-item>
        <ion-searchbar color="danger" [(ngModel)]="name"  placeholder="请输入编码或姓名">
        </ion-searchbar>

        <div text-center>
            <button (click)="search()" icon-left ion-button small color="calm">
            <ion-icon name="search"></ion-icon>查询</button>

            <button (click)="confirm()" icon-left ion-button small color="calm">
            <ion-icon name="checkmark"></ion-icon>确定</button>
        </div>

        <ion-list-header>
            通讯录
        </ion-list-header>

        <ion-item *ngFor="let item of items;let i = index">
            <ion-label>
            {{item.Name}}({{item.Uid}})<br>
            <span>{{item.Dept}}&emsp;{{item.Duty}}</span>
            </ion-label>
            <ion-checkbox [checked]="item.checked" (ionChange)="checkPeople(i)"></ion-checkbox>
        </ion-item>
        <ion-list>
    `
})
export class GetContact {
    dept: string;
    deptItems: any = [];
    items: any = [];
    haveAffix: boolean = false;
    addressee: string;
    addresseeIds: string;
    name: string;

    constructor(private navParams: NavParams,
                public viewCtrl: ViewController,
                public storage: Storage,
                public httpService: HttpService) {
        this.addressee = this.navParams.get("addressee");
        this.addresseeIds = this.navParams.get("addresseeIds");
        console.log(this.addressee, this.addresseeIds);
        this.initializeItems();
    }

    initializeItems() {
        this.httpService.postFormData("ashx/BmLs.ashx", {})
        .map((res: Response) => res.json())
        .subscribe((resJson) => {
            if (resJson.Result){
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

    getRecipientsByDept(id?){
        let data = !!id ? {DeptId: id} : {};
        this.httpService.postFormData("ashx/UserSheet.ashx", data)
        .map((res: Response) => res.json())
        .subscribe((result) => {
            console.log(result);
            if (result.Result){
                const idArr = this.addresseeIds.split(",");

                this.items = result.Data.map(function (value, index) {
                    for (let i in idArr) {
                        if (idArr[i] !== value.Uid) {
                            Object.assign(value, { checked: false });
                        } else {
                            return Object.assign(value, { checked: true });

                        }
                    }
                    return value;

                });
            }
        });
    }

    search() {
        let data = (this.name !== "") ? {name: name} : {};
        this.httpService.postFormData("ashx/UserSheet.ashx", data)
        .map((res: Response) => res.json())
        .subscribe((result) => {
            console.log(result);
            if (result.Result){
                const idArr = this.addresseeIds.split(",");

                this.items = result.Data.map(function (value, index) {
                    for (let i in idArr) {
                        if (idArr[i] !== value.Uid) {
                            Object.assign(value, { checked: false });
                        } else {
                            return Object.assign(value, { checked: true });

                        }
                    }
                    return value;

                });
            }
        });
     }

    checkPeople(index: number) {
        this.items[index].checked = !this.items[index].checked;
    }

    confirm() {
        console.log(confirm);
        this.addressee = "";
        this.addresseeIds = "";
        for (let value of this.items) {
            if (value.checked) {
                this.addressee += value.Name + ",";
                this.addresseeIds += value.Uid + ",";
            }
        }
        this.viewCtrl.dismiss({ addressee: this.addressee, addresseeIds: this.addresseeIds });
    }
}
