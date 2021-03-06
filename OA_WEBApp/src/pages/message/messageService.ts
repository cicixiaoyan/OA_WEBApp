import { Injectable } from '@angular/core';
import { Response } from "@angular/http";
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Observable';
import { HttpService } from "../../providers/HttpService";

@Injectable()
export class MessageService {
    Message: object = {
        inbox: 1, // 收件箱
        outbox: 0 // 发件箱
    };

    messageStatus: object = {
        read: 1, // 已读
        unread: 0 // 未读
    };

    constructor(public httpService: HttpService) {
    }

    getList(param?): Observable<any>{
        return this.httpService.postFormData("ashx/NewsLs.ashx", param).map((res: Response) => res.json());
    }

    getInboxList(param?): Observable<any>{
        return this.httpService.postFormData("ashx/NewsLs.ashx", param).map((res: Response) => res.json());
    }

    getOutboxList(param?): Observable<any> {
        return this.httpService.postFormData("ashx/NewsLs.ashx", param).map((res: Response) => res.json());
    }

    // read(id): Observable<any>{
    //     return this.httpService.postFormData("ashx/MailList.ashx", {"id": id}).map((res: Response) => res.json());
    // }

    write(param?): Observable<any>{
        // Uid 当前用户账号id
        // AcceptUid 接收账号id
        // Content 发送内容
        // 返回json
        // {"Data":"xxx！","Result":false}
        return this.httpService.postFormData("ashx/NewsAdd.ashx", param).map((res: Response) => res.json());
    }

    markup(param?): Observable<any>{
        return this.httpService.postFormData("ashx/NewsMarkup.ashx", param).map((res: Response) => res.json());
    }

}
