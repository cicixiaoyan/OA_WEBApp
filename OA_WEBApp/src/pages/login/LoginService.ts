import { Injectable } from '@angular/core';
import { HttpService } from "../../providers/HttpService";
import { Observable } from "rxjs";
// import { UserInfo } from "../../model/UserInfo";

@Injectable()
export class LoginService {
  constructor(private httpService: HttpService) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Login');
  }


  login(user): Observable<any> {
    return this.httpService.postFormData("ashx/Login.ashx/LoginInfo",user).map(responce => responce.json());
    // let userInfo = {"ui_id":"admin","ui_desc":"系统管理员","ui_pwd":"202CB962AC59075B964B07152D234B70","ui_lx":"企业","ui_role":"系统管理员","ui_sex":"","ui_ssbm":"公司本部","ui_zw":"","ui_bgdh":"","ui_czdh":"","ui_yddh":"13888888888","ui_mail":"ceshi@126.com","ui_yndx":"Y","ui_status":"正常","ui_sdate":"2016/1/1 0:00:00","ui_edate":"2018/12/31 0:00:00","ui_csrq":"","ui_comm":"","Cjr":"","Cjsj":"","lasttime":"2017/5/3 13:38:28","ui_rzrq":"2017/4/1 0:00:00","ui_ssgs":"成都永朔科技有限公司",photo:"123.png"};
    // return Observable.create((observer) => {
    //   observer.next(userInfo);
    // });
  }

}
