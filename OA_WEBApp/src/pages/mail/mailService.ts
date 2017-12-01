import { Injectable } from '@angular/core';
import { Response } from "@angular/http";
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Observable';
import { HttpService } from "../../providers/HttpService";

@Injectable()
export class MailService {
    mailStatus: object = {
        inbox: 0, // 收件箱
        outbox: 1 // 发件箱
    };

    status: object = {
        read: 1, // 已读
        unread: 0, // 未读
        all: 2 // 全部
    };

    constructor(public httpService: HttpService) {
    }

    getInboxList(param?): Observable<any>{
        console.log(12, param);
        return this.httpService.postFormData("ashx/MailList.ashx", param).map((res: Response) => res.json());
    }

    getOutboxList(param?): Observable<any> {
    return this.httpService.postFormData("ashx/MailList.ashx", param).map((res: Response) => res.json());
    }

    read(param): Observable<any>{
        return this.httpService.postFormData("ashx/MailGetDetail.ashx", param).map((res: Response) => res.json());
    }

    write(param?): Observable<any>{
        // Uid 当前用户账号id
        // AcceptUid 接收账号id
        // Content 发送内容
        // 返回json
        // {"Data":"xxx！","Result":false}
        return this.httpService.postFormData("ashx/MailAdd.ashx", param).map((res: Response) => res.json());
    }

    AttachUpload(param): Observable<any>{
        return this.httpService.postFormData("ashx/AttachUpload.ashx", param).map((res: Response) => res.json());
    }

    getRecipients(param?): Observable<any>{
        // 输入参数
        // Name 输入查询用户名称
        // 返回json
        return this.httpService.postFormData("ashx/UserSheet.ashx", param).map((res: Response) => res.json());
    }

    getRecipientsByDept(id?): Observable<any>{
        // 输入参数
        // Name 输入查询用户名称
        // 返回json
        return this.httpService.postFormData("ashx/UserSheet.ashx", {DeptId: id}).map((res: Response) => res.json());
    }

    getDept(): Observable<any> {
        return this.httpService.postFormData("ashx/BmLs.ashx", {}).map((res: Response) => res.json());
    }

}
