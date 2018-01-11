import { Injectable } from '@angular/core';
import { Response } from "@angular/http";
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Observable';
import { HttpService } from "../../../providers/HttpService";

@Injectable()
export class JobTypeSetService {

  status: object = {
    "审批中": '审批中',
    "已同意": '已同意',
    "已拒绝": '已拒绝',
  };
  constructor(public httpService: HttpService) {
  }


  add(param): Observable<any> {
    param.verb = 0;
    return this.httpService.postFormData("ashx/gzset.ashx", param).map((res: Response) => res.json());
  }
  del(param): Observable<any> {
    param.verb = 1;
    return this.httpService.postFormData("ashx/gzset.ashx", param).map((res: Response) => res.json());
  }
  mod(param): Observable<any> {
    param.verb = 2;
    return this.httpService.postFormData("ashx/gzset.ashx", param).map((res: Response) => res.json());
  }
  getList(param): Observable<any> {
    param.verb = 3;
    return this.httpService.postFormData("ashx/gzset.ashx", param).map((res: Response) => res.json());
  }
  getGZType(param): Observable<any> {
    param.verb = 4;
    return this.httpService.postFormData("ashx/gzset.ashx", param).map((res: Response) => res.json());
  }




}
