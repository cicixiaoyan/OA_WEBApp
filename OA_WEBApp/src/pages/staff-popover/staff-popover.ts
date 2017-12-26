import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';
import { Storage } from '@ionic/storage';
import { Response } from "@angular/http";
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Observable';
import { HttpService } from '../../providers/HttpService';

/**
 * Generated class for the StaffPopoverPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-staff-popover',
  templateUrl: 'staff-popover.html',
})
export class StaffPopoverPage {


    dept: string;
    deptItems: any = [];
    items: any = [];
    haveAffix: boolean = false;
    Uid: string;
    name: string;
    Result: Object = {}; // 最终返回结果

    constructor(private navParams: NavParams,
                public viewCtrl: ViewController,
                public storage: Storage,
                public httpService: HttpService) {
          this.Uid = this.navParams.get("Uid");
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
            // if (result.Result){
            //     const idArr = this.addresseeIds.split(",");
            //
            //     this.items = result.Data.map(function (value, index) {
            //         for (let i in idArr) {
            //             if (idArr[i] !== value.Uid) {
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
            "Uid": '1',
            'Name': '张三',
            'Sex': '男',
            'IDC': '511324198910121111',
            'Dept': '部门名称1',
            'Duty': '职务1',
            "JobNumber": '123456'
          },
          {
            "Uid": '2',
            'Name': '李四',
            'Sex': '男',
            'IDC': '511324198910121111',
            'Dept': '部门名称2',
            'Duty': '职务2',
            "JobNumber": '123455'
          },
          {
            "Uid": '4',
            'Name': '李四',
            'Sex': '男',
            'IDC': '511324198910121111',
            'Dept': '部门名称2',
            'Duty': '职务2',
            "JobNumber": '123455'
          },
          {
            "Uid": '5',
            'Name': '李四',
            'Sex': '男',
            'IDC': '511324198910121111',
            'Dept': '部门名称2',
            'Duty': '职务2',
            "JobNumber": '123455'
          },
          {
            "Uid": '6',
            'Name': '李四',
            'Sex': '男',
            'IDC': '511324198910121111',
            'Dept': '部门名称2',
            'Duty': '职务2',
            "JobNumber": '123455'
          },
          {
            "Uid": '7',
            'Name': '李四',
            'Sex': '男',
            'IDC': '511324198910121111',
            'Dept': '部门名称2',
            'Duty': '职务2',
            "JobNumber": '123455'
          },
          {
            "Uid": '3',
            'Name': '王五',
            'Sex': '男',
            'IDC': '511324198910121111',
            'Dept': '部门名称3',
            'Duty': '职务3',
            "JobNumber": '123454'
          }
        ];
        this.items = data.map(function (value, index) {
           if (value.Uid == that.Uid) Object.assign(value, { checked: true });
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

    checkPeople(Index: number) { // 单选
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
