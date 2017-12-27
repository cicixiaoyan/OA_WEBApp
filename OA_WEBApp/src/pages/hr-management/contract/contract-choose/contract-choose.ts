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
    ContactId: string;
    name: string;
    Result: Object = {}; // 最终返回结果

    constructor(private navParams: NavParams,
                public viewCtrl: ViewController,
                public storage: Storage,
                public httpService: HttpService) {
        this.ContactId = this.navParams.get("ContactId");
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
        let data = !!id ? { DeptId: id } : {};
        this.httpService.postFormData("ashx/UserSheet.ashx", data)
            .map((res: Response) => res.json())
            .subscribe((result) => {
                console.log(result);
                // if (result.Result){
                //     const idArr = this.addresseeIds.split(",");
                //
                //     this.items = result.Data.map(function (value, index) {
                //         for (let i in idArr) {
                //             if (idArr[i] !== value.ContactId) {
                //                 Object.assign(value, { checked: false });
                //             } else {
                //                 return Object.assign(value, { checked: true });
                //
                //             }
                //         }
                //         return value;
                //
                //     });
                // }
            });
    }

    search() {
        console.log('change');
        let that = this;
        let data = [
            {
                "ContactId": '1', // 合同Id
                "ContractNumber": '1', // 合同编号
                "ContractName": '', // 合同名称
                "LastValidDate": '2017-12-12', // 上次生效时间
                "LastExpirationDate": '2017-12-12', // 上次到期时间
                "SigningDate": '12345', // 签约时间

                'StaffId': '1', // 员工Id
                "StaffNumber": '123456', // 员工工号
                'Name': '张三', // 姓名
                'Sex': '男', // 性别
                'IDC': '511324198910121111', // 身份证号
                'Dept': '部门名称1', // 部门名称
                'DeptId': '部门名称1', // 部门Id
                'Duty': '职务1', // 职务
            },
            {
                "ContactId": '2', // 合同Id
                "ContractNumber": '1', // 合同编号
                "ContractName": '', // 合同名称
                "LastValidDate": '2017-12-12', // 上次生效时间
                "LastExpirationDate": '2017-12-12', // 上次到期时间
                "SigningDate": '12345', // 签约时间

                'StaffId': '1', // 员工Id
                "StaffNumber": '123456', // 员工工号
                'Name': '张三', // 姓名
                'Sex': '男', // 性别
                'IDC': '511324198910121111', // 身份证号
                'Dept': '部门名称1', // 部门名称
                'DeptId': '部门名称1', // 部门Id
                'Duty': '职务1', // 职务
            },
        ];
        this.items = data.map(function(value, index) {
            if (value.ContactId == that.ContactId) Object.assign(value, { checked: true });
            else Object.assign(value, { checked: false });
            return value;
        });

        // let data = (this.name !== "") ? {name: name} : {};
        // this.httpService.postFormData("ashx/UserSheet.ashx", data)
        // .map((res: Response) => res.json())
        // .subscribe((result) => {
        //     console.log(result);
        //     if (result.Result){
        //         const idArr = this.addresseeIds.split(",");
        //
        //         this.items = result.Data.map(function (value, index) {
        //             for (let i in idArr) {
        //                 if (idArr[i] !== value.Uid) {
        //                     Object.assign(value, { checked: false });
        //                 } else {
        //                     return Object.assign(value, { checked: true });
        //
        //                 }
        //             }
        //             return value;
        //
        //         });
        //     }
        // });
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
