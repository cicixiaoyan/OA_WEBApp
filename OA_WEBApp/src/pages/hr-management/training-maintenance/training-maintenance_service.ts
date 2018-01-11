import { Injectable } from '@angular/core';
import { Response } from "@angular/http";
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Observable';
import { HttpService } from "../../../providers/HttpService";

@Injectable()
export class TrainingMaintenanceService {


    constructor(public httpService: HttpService) {
    }


    add(param): Observable<any>{
        param.verb = 0;
        return this.httpService.postFormData("ashx/hrpxwh.ashx", param).map((res: Response) => res.json());
    }
    del(param): Observable<any>{
        param.verb = 1;
        
        return this.httpService.postFormData("ashx/hrpxwh.ashx", param).map((res: Response) => res.json());
    }
    mod(param): Observable<any>{
        param.verb = 2;
        
        return this.httpService.postFormData("ashx/hrpxwh.ashx", param).map((res: Response) => res.json());
    }
    view(param): Observable<any>{
        param.verb = 3;        
        return this.httpService.postFormData("ashx/hrpxwh.ashx", param).map((res: Response) => res.json());
    }




}
