import { Injectable } from '@angular/core';
import { Response } from "@angular/http";
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Observable';
import { HttpService } from "../../providers/HttpService";

@Injectable()
export class SmsService {

    smsStatus: object = {
        "sent": 1, // 已发送
        "toBeSent": 0, // 待发送
    };

    constructor(public httpService: HttpService) {
    }

    getList(param?): Observable<any>{
        // PageIndex, PageSize, UserId, Status
        return this.httpService.postFormData("ashx/Smsls.ashx", param).map((res: Response) => res.json());
    }

    write(param?): Observable<any>{
        // IsTimer, SendDate, UserId, Content, CellPhone
        return this.httpService.postFormData("ashx/SmsAdd.ashx", param).map((res: Response) => res.json());
    }

}
