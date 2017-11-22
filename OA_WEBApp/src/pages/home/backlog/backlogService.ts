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

    getNotDoneList(param?) {
        return this.httpService.postFormData('/ashx/TodoLs.ashx', param).map((res: Response) => res.json());
    }

    getDoneList(param?) {
        return this.httpService.postFormData('/ashx/TodoLs.ashx', param).map((res: Response) => res.json());
    }

    getDone(id) {
        return this.httpService.postFormData('/ashx/TodoLs.ashx', {Id: id}).map((res: Response) => res.json());
    }

    getNotDone(id) {
        return this.httpService.postFormData('/ashx/TodoLs.ashx', {Id: id}).map((res: Response) => res.json());
    }

    //   getInboxList(param?):Observable<any>{
    //       return this.httpService.postFormData("url",param).map((res: Response) => res.json());
    //   }

    //   getOutboxList(param?):Observable<any> {
    //     return this.httpService.postFormData("url",param).map((res: Response) => res.json());
    //   }

}
