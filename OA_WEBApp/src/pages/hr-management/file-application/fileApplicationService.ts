import { Injectable } from '@angular/core';
import { Response } from "@angular/http";
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Observable';
import { HttpService } from "../../../providers/HttpService";

@Injectable()
export class FileApplicationService {

  status: object = {
    "已同意": 0,
    "已拒绝": 1,
    "审批中": 2,
  };
  constructor(public httpService: HttpService) {
  }


  add(param = {}): Observable<any> {
    param["verb"] = 0;
    return this.httpService.postFormData("ashx/hrfileapplication.ashx", param).map((res: Response) => res.json());
  }

  getList(param = {}): Observable<any> {
    param["verb"] = 3;
    return this.httpService.postFormData("ashx/hrfileapplication.ashx", param).map((res: Response) => res.json());
  }

  GetSP(param = {}): Observable<any> {
    param["verb"] = 9;
    return this.httpService.postFormData("ashx/hrfileapplication.ashx", param).map((res: Response) => res.json());
  }

  getApprove(param = {}): Observable<any> {
    param["verb"] = 3;
    return this.httpService.postFormData("ashx/hrapproval.ashx", param).map((res: Response) => res.json());
  }
  approve(param = {}): Observable<any> {
    param["verb"] = 2;
    return this.httpService.postFormData("ashx/hrapproval.ashx", param).map((res: Response) => res.json());
  }

  




}
