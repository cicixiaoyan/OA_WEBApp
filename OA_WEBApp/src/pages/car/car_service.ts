import { Injectable } from '@angular/core';
import { Response } from "@angular/http";
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Observable';
import { HttpService } from "../../providers/HttpService";

@Injectable()
export class CarService {

    constructor(public httpService: HttpService) {
    }

    getList(param?): Observable<any>{
        return this.httpService.postFormData("ashx/MeetLs.ashx", param).map((res: Response) => res.json());
    }


    getDriverList(param?): Observable<any>{
        return this.httpService.postFormData("", param).map((res: Response) => res.json());
    }






}
