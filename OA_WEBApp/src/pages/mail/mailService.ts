import { Injectable } from '@angular/core';
import { Response } from "@angular/http";
import 'rxjs/add/operator/map';
import { Observable } from "rxjs";
import { HttpService } from "../../providers/HttpService";

@Injectable()
export class MailService {
    Mail: object = {
        inbox: 0, // 收件箱
        outbox: 1 // 发件箱
    };

    mailStatus: object = {
        read: 1, // 已读
        unread: 0, // 未读
        all: 3 // 全部
    };

    constructor(public httpService: HttpService) {
    }

    // getInboxList(param?) {
    //     return this.httpService.get('assets/data/mail-inbox.json').map((res: Response) => res.json());
    // }

    // getOutboxList(param?) {
    //     return this.httpService.get('assets/data/mail-outbox.json').map((res: Response) => res.json());
    // }

      getInboxList(param?): Observable<any>{
          return this.httpService.postFormData("ashx/MailList.ashx", param).map((res: Response) => res.json());
      }

      getOutboxList(param?): Observable<any> {
        return this.httpService.postFormData("ashx/MailList.ashx", param).map((res: Response) => res.json());
      }

}
