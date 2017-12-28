import { Injectable } from '@angular/core';
import { Response } from "@angular/http";
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Observable';
import { HttpService } from "../../../providers/HttpService";

@Injectable()
export class FileApplicationService {

    status: object = {
      "审批中": '审批中',
      "已同意": '已同意',
      "已拒绝": '已拒绝',
    };
    constructor(public httpService: HttpService) {
    }

    // getList(param?): Observable<any>{
    //     return this.httpService.postFormData("ashx/MeetLs.ashx", param).map((res: Response) => res.json());
    // }

}
