import { Injectable } from '@angular/core';
import { Response } from "@angular/http";
import 'rxjs/add/operator/map';
// import {Observable} from "rxjs";
import { HttpService } from "../../../providers/HttpService";

@Injectable()
export class BacklogService {
    Status: object = {
        notdone: 0, // 未办理
        done: 1 // 已办理
    };

    constructor(public httpService: HttpService) {
    }

    TodoApproveLs(param?) {// 待办列表
        param.verb = "3";
        return this.httpService.postFormData('/ashx/TodoLs.ashx', param).map((res: Response) => res.json());
    }
    approveStep1(param?) {// 审批通过或驳回,返回id
        param.verb = "21";
        return this.httpService.postFormData('/ashx/TodoLs.ashx', param).map((res: Response) => res.json());
    }
    approveste2(param?) {// 审批通过或驳回
        param.verb = "22";
        return this.httpService.postFormData('/ashx/TodoLs.ashx', param).map((res: Response) => res.json());
    }




    //   getInboxList(param?):Observable<any>{
    //       return this.httpService.postFormData("url",param).map((res: Response) => res.json());
    //   }

    //   getOutboxList(param?):Observable<any> {
    //     return this.httpService.postFormData("url",param).map((res: Response) => res.json());
    //   }

}
