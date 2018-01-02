import { Injectable } from '@angular/core';
import { Response } from "@angular/http";
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Observable';
import { HttpService } from "../../../providers/HttpService";

@Injectable()
export class StaffAttendanceSettingsService {

    constructor(public httpService: HttpService) {
    }

    // getList(param?): Observable<any>{
    //     return this.httpService.postFormData("ashx/BusVehicleLs.ashx", param).map((res: Response) => res.json());
    // }

}
