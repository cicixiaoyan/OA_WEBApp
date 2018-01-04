import { Component, Inject } from '@angular/core';
import { IonicPage, NavController, NavParams , ViewController } from 'ionic-angular';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { MeetingService } from '../../meeting_service';

@IonicPage()
@Component({
  selector: 'page-meeting-search-popover',
  templateUrl: 'meeting-search-popover.html',
})
export class MeetingSearchPopoverPage {

  searchForm: FormGroup;
  search: any;
  MeetTypeLs: Array<any> = [];
  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              public viewCtrl: ViewController,
              private meetingService: MeetingService,
              @Inject(FormBuilder) formBuilder: FormBuilder) {
    this.search =  this.navParams.get("search");
    this.meetingService.MeetTypeLs().subscribe((resJson) => {
      if (resJson.Result)  this.MeetTypeLs = resJson.Data;
    });
    this.searchForm = formBuilder.group({
      "MeetRecod": ["", []], // 第一个参数是默认值
      "Title": ["", []],
      "TypeId": ["", []],
      "Status": ["", []],
    });

    if (this.search){
      this.searchForm.setValue({
        "MeetRecod": this.search.MeetRecod,
        "Title": this.search.Title,
        "TypeId": this.search.TypeId,
        "Status": this.search.Status,
      });
    }
  }

  sent(value){
    this.viewCtrl.dismiss({"search": value});
  }

  reset(){
    this.searchForm.reset();
    this.searchForm.setValidators(null);
    this.searchForm.updateValueAndValidity();
  }

}
