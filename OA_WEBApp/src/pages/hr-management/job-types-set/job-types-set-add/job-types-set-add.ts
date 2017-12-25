import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
// import 'rxjs/add/operator/map';
// import { Observable } from 'rxjs/Observable';
// import { HttpService } from "../../../providers/HttpService";
/**
 * Generated class for the JobTypesSetAddPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-job-types-set-add',
  templateUrl: 'job-types-set-add.html',
})
export class JobTypesSetAddPage {
  typeForm: FormGroup;
  constructor(public navCtrl: NavController, 
              public navParams: NavParams, 
              // private httpService: HttpService,
              private formBuilder: FormBuilder,
              private viewCtrl: ViewController) {
      this.typeForm = this.formBuilder.group({
        Category: ['', [Validators.required]], // 第一个参数是默认值
        Name: ["", [Validators.required]],
        Remarks: ["", [ Validators.maxLength(180)]],
    });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad JobTypesSetAddPage');
  }

  dismiss(){
    this.viewCtrl.dismiss();
  }

  sent(value){
    // 提交
    // this.httpService.postFormData("", value)
    // .map((res: Response) => res.json())
    // .subscribe((resJson) => {

    // });
  }

}
