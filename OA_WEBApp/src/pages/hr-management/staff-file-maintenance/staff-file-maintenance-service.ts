import { Injectable } from '@angular/core';
import { Response } from "@angular/http";
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Observable';
import { HttpService } from "../../../providers/HttpService";

@Injectable()
export class StaffFileMaintenanceService {

  // status: object = {
  //   "审批中": '审批中',
  //   "已同意": '已同意',
  //   "已拒绝": '已拒绝',
  // };
  constructor(public httpService: HttpService) {
  }


  addBasic(param): Observable<any> {
    param.verb = "01";
    return this.httpService.postFormData("ashx/hrarchives.ashx", param).map((res: Response) => res.json());
  }
  addWorkExp(param): Observable<any> {
    param.verb = "02";
    return this.httpService.postFormData("ashx/hrarchives.ashx", param).map((res: Response) => res.json());
  }
  addSociology(param): Observable<any> {
    param.verb = "03";
    return this.httpService.postFormData("ashx/hrarchives.ashx", param).map((res: Response) => res.json());
  }
  addEdu(param): Observable<any> {
    param.verb = "04";
    return this.httpService.postFormData("ashx/hrarchives.ashx", param).map((res: Response) => res.json());
  }


  basicDel(param): Observable<any> {
    param.verb = "11";
    return this.httpService.postFormData("ashx/hrarchives.ashx", param).map((res: Response) => res.json());
  }

  workExpDel(param): Observable<any> {
    param.verb = "12";
    return this.httpService.postFormData("ashx/hrarchives.ashx", param).map((res: Response) => res.json());
  }
  sociologyDel(param): Observable<any> {
    param.verb = "13";
    return this.httpService.postFormData("ashx/hrarchives.ashx", param).map((res: Response) => res.json());
  }
  EduDel(param): Observable<any> {
    param.verb = "14";
    return this.httpService.postFormData("ashx/hrarchives.ashx", param).map((res: Response) => res.json());
  }

  getList(param): Observable<any> {
    param.verb = 3;
    return this.httpService.postFormData("ashx/hrarchives.ashx", param).map((res: Response) => res.json());
  }

  modBasic(param): Observable<any> {
    param.verb = 2;
    return this.httpService.postFormData("ashx/hrarchives.ashx", param).map((res: Response) => res.json());
  }

  getNativeLs(param): Observable<any> {
    return this.httpService.postFormData("ashx/hrarchives.ashx", param).map((res: Response) => res.json());
  }
  




}
