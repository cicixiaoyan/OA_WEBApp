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

    getNotDoneList(param?) { // uid, PageIndex, PageSize, Status
        return this.httpService.postFormData('/ashx/TodoLs.ashx', param).map((res: Response) => res.json());
    }

    getDoneList(param?) {
        return this.httpService.postFormData('/ashx/TodoLs.ashx', param).map((res: Response) => res.json());
    }

    getDone(param?) {// id
        return this.httpService.postFormData('/ashx/TodoDetail.ashx', param).map((res: Response) => res.json());
    }

    getNotDone(param?) {// id
        return this.httpService.postFormData('/ashx/TodoDetail.ashx', param).map((res: Response) => res.json());
    }

    TodoApprove(param?) {// ISPass
        return this.httpService.postFormData('/ashx/TodoApprove.ashx', param).map((res: Response) => res.json());
    }

    //   getInboxList(param?):Observable<any>{
    //       return this.httpService.postFormData("url",param).map((res: Response) => res.json());
    //   }

    //   getOutboxList(param?):Observable<any> {
    //     return this.httpService.postFormData("url",param).map((res: Response) => res.json());
    //   }

}
