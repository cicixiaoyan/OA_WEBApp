import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { Validators as iValidators } from '../../../../providers/Validators';
import { StaffFileMaintenanceService } from '../staff-file-maintenance-service';
import { NativeService } from '../../../../providers/NativeService';
import { Events } from 'ionic-angular/util/events';
import { FileService } from '../../../../providers/FileService';
import { ActionSheetController } from 'ionic-angular/components/action-sheet/action-sheet-controller';
import { PublicService } from '../../../../providers/PublicService';
import { GlobalData } from '../../../../providers/GlobalData';
import { Utils } from '../../../../providers/Utils';
import { UPLOAD_PATH } from '../../../../providers/Constants';

@IonicPage()
@Component({
  selector: 'page-staff-file-maintenance-basic-imfornation',
  templateUrl: 'staff-file-maintenance-basic-imfornation.html',
})
export class StaffFileMaintenanceBasicImfornation {
  Id: string = "";
  readOnly: boolean = false;

  baseForm: FormGroup;
  hideOne: boolean = true;
  hideTwo: boolean = true;
  hideThree: boolean = true;
  hideFour: boolean = true;
  formCtrls: any;

  photoSrc = "./assets/img/boy.png";
  attachLs = [];

  nationLs: Array<any>;
  majorLs: Array<any>;
  dutyLs: Array<any>;
  titleLs: Array<any>;
  natureLs: Array<any>;
  deptLs: Array<any>;
  deptObj: object;

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              private FormBuilder: FormBuilder,
              private nativeService: NativeService,
              private staffFileMaintenanceService: StaffFileMaintenanceService,
              private fileService: FileService,
              public events: Events,
              private actionSheetCtrl: ActionSheetController,
              private publicService: PublicService,
              public globalData: GlobalData
            ) {
      this.readOnly = this.navParams.get("readOnly") ? true : false;
      this.Id = this.navParams.get("Id");
      this.baseForm = this.FormBuilder.group({
        
        "BasicNum": ['', [Validators.required, Validators.maxLength(20)]], // 员工工号
        "BasicName": ['', [Validators.required, Validators.maxLength(10)]], // 姓名
        "BasicSex": ['男', [Validators.required]], // 性别
        "BasciBirth": ['', [Validators.required]], // 出生日期
        "BasicFrom": ['', [Validators.maxLength(12)]], // 籍贯
        "BasicNation": [, [Validators.required]], // 名族
        "BasicPartyDate": ['', []], // 入党时间
        "BasicOutlook": ['', []], // 政治面貌
        "BasicIDCard": ['', [iValidators.idcValid]], // 身份证号
        "BasicStatus": ['在职', []], // 员工状态，在职或离职

        "BasicFirstEduation": ['', [Validators.required]], // 第一学历
        "BasicFirstGraduaiton": ['', []], // 毕业日期
        "BasicFirstGraduationSchool": ['', [Validators.maxLength(30)]], // 毕业学校
        "BasicFirstMajor": [, []], // 专业
        "BasicSecondEduation": ['', []], // 第二学历
        "BasicSecondGradutionSchool": ['', [Validators.maxLength(30)]], // 毕业学校
        "BasicAcademic": ['', []], // 学位
        "BasicResidence": ['', [Validators.maxLength(40)]], // 户口所在地
        "BasicFamilyAddr": ['', [Validators.maxLength(40)]], // 家庭地址
        "BasicContactNumber": ['', [iValidators.phone]], // 联系电话
        "BasicCellPhone": ['', [iValidators.phone]], // 手机号
        "BasicMail": ['', [iValidators.email]], // 电子邮箱
        "BasicCertificate": ['', [Validators.maxLength(180)]], // 所获证书

        "BasicDeptId": ['', [Validators.required]], // 所在部门
        "BasicDeptName": ['', []], // 所属部门名称
        "BasicDuty": [, [Validators.required]], // 职务
        "BasicQualifications": ['', [Validators.maxLength(30)]], // 职业资格
        "BasicTitle": [, []], // 职称
        "BasciFileNum": ['', [Validators.maxLength(30)]], // 员工档案号
        "BasicWordDate": ['', [Validators.required]], // 参加工作日期
        "BasicUnitDate": ['', []], // 进入本单位日期
        "BasicNature": [, [Validators.required]], // 员工性质
        "BasicInsuranceNum": ['', [Validators.maxLength(16)]], // 医疗保险号
        "BasicHandBookNum": ['', [Validators.maxLength(20)]], // 养老手册号
        "BasicProvidentNum": ['', [Validators.maxLength(20)]], // 公积金账号
        "BasicMemo": ['', [Validators.maxLength(180)]], // 备注

        "BasicPhoto": [],
        "BasicAttach": {},
        "ExpLs": [],
        "SociologyLs": [],
        "EduLs": []
      });

      this.formCtrls = this.baseForm.controls;
      if (this.Id != ""){
        this.staffFileMaintenanceService.getList({"id": this.Id}).subscribe(resJson => {
          if (resJson.Result){
            let data = resJson.Data[0];

            data.BasciBirth = Utils.dateFormat(new Date(data.BasciBirth), 'yyyy-MM-dd');
            data.BasicPartyDate = data.BasicPartyDate ? 
              Utils.dateFormat(new Date(data.BasicPartyDate), 'yyyy-MM-dd') : "";
            data.BasicFirstGraduaiton = data.BasicFirstGraduaiton ? 
              Utils.dateFormat(new Date(data.BasicFirstGraduaiton), 'yyyy-MM-dd') : "";
            data.BasicWordDate = data.BasicWordDate ? 
              Utils.dateFormat(new Date(data.BasicWordDate), 'yyyy-MM-dd') : "";
            data.BasicUnitDate = data.BasicUnitDate ? 
              Utils.dateFormat(new Date(data.BasicUnitDate), 'yyyy-MM-dd') : "";

            this.baseForm.patchValue(data);

            if (resJson.Data[0].BasicPhoto != "") 
              this.photoSrc = this.globalData.FILE_SERVE_URL + UPLOAD_PATH.hrImg + resJson.Data[0].BasicPhoto;

            let AffixObj = resJson.Data[0].BasicAttach;
            if (AffixObj.length != 0){
              let arr = [];
              for (let i in AffixObj){
                arr.push({"filename": AffixObj[i], "PathStr": i});
              }
              this.attachLs = [...arr];
            }

          }else{
            this.nativeService.showToast(resJson.Data, 800);
          }
        });
      }
      
  }

  ionViewWillLoad() {
    this.publicService.getPublicLs(6).subscribe(resJson => {
      if (resJson.Result)  this.nationLs = [...this.toArry(resJson.Data)];
    });
    this.publicService.getPublicLs(7).subscribe(resJson => {
      if (resJson.Result) this.majorLs = [...this.toArry(resJson.Data)];
    });
    this.publicService.getPublicLs(8).subscribe(resJson => {
      if (resJson.Result) this.dutyLs = [...this.toArry(resJson.Data)];
    });
    this.publicService.getPublicLs(9).subscribe(resJson => {
      if (resJson.Result) this.titleLs = [...this.toArry(resJson.Data)];
    });
    this.publicService.getPublicLs(10).subscribe(resJson => {
      if (resJson.Result) this.natureLs = [...this.toArry(resJson.Data)];
    });
    this.publicService.getPublicLs(11).subscribe(resJson => {
      if (resJson.Result) {
        this.deptObj = resJson.Data;
        this.deptLs = [...this.toArry(resJson.Data)];
      }
    });
  }

  shrink(parma){
    if (parma === 'one') this.hideOne = !this.hideOne;
    if (parma === 'two') this.hideTwo = !this.hideTwo;
    if (parma === 'three') this.hideThree = !this.hideThree;
    if (parma === 'four') this.hideFour = !this.hideFour;
  }

  sent(value1){
    let value = Object.assign({}, value1);
    value.BasciBirth = Utils.dateFormat_zh(new Date(value.BasciBirth), 'yyyy-MM-dd HH:mm:ss');
    value.BasicPartyDate = value.BasicPartyDate ?
      Utils.dateFormat_zh(new Date(value.BasicPartyDate), 'yyyy-MM-dd HH:mm:ss') : "";
    value.BasicFirstGraduaiton = value.BasicFirstGraduaiton ?
      Utils.dateFormat_zh(new Date(value.BasicFirstGraduaiton), 'yyyy-MM-dd HH:mm:ss') : "";
    value.BasicWordDate = value.BasicWordDate ?
      Utils.dateFormat_zh(new Date(value.BasicWordDate), 'yyyy-MM-dd HH:mm:ss') : "";
    value.BasicUnitDate = value.BasicUnitDate ?
      Utils.dateFormat_zh(new Date(value.BasicUnitDate), 'yyyy-MM-dd HH:mm:ss') : "";
    // console.log(this.baseForm.valid);
    value.BasicDeptName = this.deptObj[value.BasicDeptId];
    if (this.Id != ""){
      value.BasicAttach = null;
      value.ExpLs = null;
      value.SociologyLs = null;
      value.EduLs = null;
      value.id = this.Id;

      // value.BasciBirth = Utils.dateFormat(new Date(value.BasciBirth), 'yyyy-MM-dd HH:mm:ss');
      // value.BasicWordDate = Utils.dateFormat(new Date(value.BasicWordDate), 'yyyy-MM-dd HH:mm:ss');
      // console.log(value);
      this.staffFileMaintenanceService.modBasic(value).subscribe(resJson => {
        if (resJson.Result){
          this.nativeService.showToast("修改成功", 500);
        }else this.nativeService.showToast(resJson.Data, 800);
      });
    }else{
      value.BasicAttach = null;
      value.ExpLs = null;
      value.SociologyLs = null;
      value.EduLs = null;
      this.staffFileMaintenanceService.addBasic(value).subscribe(resJson => {
        if (resJson.Result){
          this.nativeService.showToast("保存基础资料成功", 500);
          this.events.publish('staff:created', resJson.Data, Date.now());
          this.Id = resJson.Data;
          this.navCtrl.parent.select(1);
        }else this.nativeService.showToast(resJson.Data, 800);
      });
    }
  }

  addPhoto() {
    let options = {
      targetWidth: 400,
      targetHeight: 400
    };
    this.nativeService.getPictureByPhotoLibrary(options).subscribe(filepath => {
      console.log(filepath);
      this.fileService.uploadPicture(filepath).subscribe(data => this.photoAddSuc(data));
    });
    // let actionSheet = this.actionSheetCtrl.create({
    //   title: '获取头像方式',
    //   buttons: [
    //     {
    //       text: '相册',
    //       handler: () => {
    //         this.nativeService.getPictureByPhotoLibrary(options).subscribe(filepath => {
    //           console.log(filepath);
    //           this.fileService.uploadPicture(filepath).subscribe(data => this.photoAddSuc(data));
    //         });

    //       }
    //     }, {
    //       text: '拍照',
    //       handler: () => {
    //         this.nativeService.getPictureByCamera(options).subscribe(filepath => {
    //           console.log(filepath);
    //           this.fileService.uploadPicture(filepath).subscribe(data => this.photoAddSuc(data));
    //         });
    //       }

    //     }, {
    //       text: '取消',
    //       role: 'cancel',
    //       handler: () => {
    //         console.log('Cancel clicked');
    //       }
    //     }
    //   ]
    // });
    // actionSheet.present();
  }

  deletePhoto() {
    this.photoSrc = this.baseForm.value.BasicSex == "女" ? "./assets/img/girl.png" : "./assets/img/boy.png";
    this.baseForm.patchValue({"BasicPhoto": ""});
  }

  readAffix(filepath, filename) {
    let url = this.globalData.FILE_SERVE_URL + UPLOAD_PATH.hr + filepath;

    this.fileService.download1(url, filepath).subscribe((path) => {
      this.fileService.openFile(path).subscribe(() => {
        
      });
    });
  }

  addAffix() {
      this.fileService.uploadAffix(3).subscribe(data => {
        console.log(data, "上传成功");
        let Data = JSON.parse(data.response).Data;        
        this.attachLs.push({"filename": decodeURIComponent(Data[0].OldName), "PathStr": Data[0].NewName});
        // this.attNo = Data[0].AttNo;
    });
  }

  private photoAddSuc(data){
    let Data = JSON.parse(data.response).Data;
    this.baseForm.patchValue({"BasicPhoto": Data[0].NewName});
    this.photoSrc = this.globalData.FILE_SERVE_URL + UPLOAD_PATH.hrImg + Data[0].NewName;
    console.log(Data[0].AttNo);
    // this.attName = Data[0].OldName;
  }

  private toArry(data){
    let arr = [];
    for (let i in data){
      arr.push({"id": i, "name": data[i]});
    }
    return arr;
  }

}
