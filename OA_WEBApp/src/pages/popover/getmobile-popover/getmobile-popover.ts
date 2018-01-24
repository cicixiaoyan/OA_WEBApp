import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';
import { Storage } from '@ionic/storage';
import { Response } from "@angular/http";
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Observable';
import { HttpService } from '../../../providers/HttpService';
import { NativeService } from '../../../providers/NativeService';
/**
 * Generated class for the GetmobilePopoverPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-getmobile-popover',
  templateUrl: 'getmobile-popover.html',
})
export class GetmobilePopoverPage {

  items: any = [];
  addressee: string;
  addresseeIds: string;
  name: string;

  constructor(private navParams: NavParams,
              public viewCtrl: ViewController,
              public storage: Storage,
              private nativeService: NativeService,
              public httpService: HttpService) {
        this.addressee = this.navParams.get("addressee") ? this.navParams.get("addressee") : '';
        this.addresseeIds = this.navParams.get("addresseeIds") ? this.navParams.get("addresseeIds") : "";
        this.initializeItems();
  }

  initializeItems() {
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
      data["ISPhone"] = 1;
      this.httpService.postFormData("ashx/UserSheet.ashx", data)
      .map((res: Response) => res.json())
      .subscribe((result) => {
          console.log(result);
          if (result.Result && (result.Data instanceof Array) && result.Data.length !== 0){
            if (this.addresseeIds !== ""){
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
            }else{
                this.items = result.Data;
            }
          }else{
            this.items = [];
            this.nativeService.showToast(result.Data);
          }
      });
  }

  search() {
    //   let data = (this.name !== "") ? {name: name} : {};
      let data = {};
      if (this.name && this.name.trim() != '')  data["name"] = this.name;
      data["ISPhone"] = 1;
      this.httpService.postFormData("ashx/UserSheet.ashx", data)
      .map((res: Response) => res.json())
      .subscribe((result) => {
          if (result.Result && (result.Data instanceof Array) && result.Data.length !== 0){
            if (this.addresseeIds !== ""){
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
            }else{
                this.items = result.Data;
            }
          }else{
            this.items = [];
            this.nativeService.showToast(result.Data);
          }
      });
  }

  checkPeople(index: number) {
      this.items[index].checked = !this.items[index].checked;
  }

  confirm() {
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
