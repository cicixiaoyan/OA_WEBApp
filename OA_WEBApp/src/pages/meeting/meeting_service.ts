import { Injectable } from '@angular/core';
import { Response } from "@angular/http";
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Observable';
import { HttpService } from "../../providers/HttpService";

@Injectable()
export class MeetingService {
    meetingStatus: object = {
        Drafting: 1, // 起草中
        Delivered: 2, // 送审中
        Approved: 3, // 已审批
        HasBeenReturned: 4, // 已退回
        completed: 5, // 已完成
    };

    constructor(public httpService: HttpService) {
    }

    getList(param?): Observable<any>{
        console.log(12, param);
        return this.httpService.postFormData("ashx/MailList.ashx", param).map((res: Response) => res.json());
    }


    read(id): Observable<any>{
        return this.httpService.postFormData("ashx/MailList.ashx", {"id": id}).map((res: Response) => res.json());
    }



}
