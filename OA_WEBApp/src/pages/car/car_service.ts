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
        return this.httpService.postFormData("ashx/BusVehicleLs.ashx", param).map((res: Response) => res.json());
    }

    geDetail(id?): Observable<any>{
        return this.httpService.postFormData("ashx/BusVehicleDetail.ashx", {"Id": id})
        .map((res: Response) => res.json());
    }

    add(param?): Observable<any>{
        return this.httpService.postFormData("ashx/BusVehicleLsAdd.ashx", param).map((res: Response) => res.json());
    }

    mod(param?): Observable<any>{
        return this.httpService.postFormData("ashx/BusVehicleLsMod.ashx", param).map((res: Response) => res.json());
    }
    
    geStatus(status?): Observable<any>{
        return this.httpService.postFormData("ashx/BusQuery.ashx", {"Status": status})
        .map((res: Response) => res.json());
    }

    getDriverList(param): Observable<any>{
        return this.httpService.postFormData("ashx/DriverLs.ashx", param).map((res: Response) => res.json());
    }

    getDriverDetails(id?): Observable<any>{
        return this.httpService.postFormData("ashx/DriverDetails.ashx", {"Id": id})
        .map((res: Response) => res.json());
    }

    driverAdd(param): Observable<any>{
        return this.httpService.postFormData("ashx/DriverAdd.ashx", param).map((res: Response) => res.json());
    }

    driverMod(param): Observable<any>{
        return this.httpService.postFormData("ashx/DriverMod.ashx", param).map((res: Response) => res.json());
    }

    driverDel(id): Observable<any>{
        return this.httpService.postFormData("ashx/DriverDel.ashx", {"Id": id})
        .map((res: Response) => res.json());
    }
}
