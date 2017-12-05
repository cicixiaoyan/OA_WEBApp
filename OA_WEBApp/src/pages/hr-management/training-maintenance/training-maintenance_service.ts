import { Injectable } from '@angular/core';
import { Response } from "@angular/http";
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Observable';
import { HttpService } from "../../../providers/HttpService";

@Injectable()
export class TrainingMaintenanceService {


    constructor(public httpService: HttpService) {
    }

    getList(param?): Observable<any>{
        return this.httpService.postFormData("ashx/MeetLs.ashx", param).map((res: Response) => res.json());
    }
    write(param?): Observable<any>{
        return this.httpService.postFormData("ashx/MeetLs.ashx", param).map((res: Response) => res.json());
    }
    read(param?): Observable<any>{
        return this.httpService.postFormData("ashx/MeetLs.ashx", param).map((res: Response) => res.json());
    }




}
