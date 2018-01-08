import { Injectable } from '@angular/core';
import { Response } from "@angular/http";
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Observable';
import { HttpService } from "../../providers/HttpService";

@Injectable()
export class CarService {

    constructor(public httpService: HttpService) {
    }
    // 车辆档案列表
    getList(param?): Observable<any>{
        return this.httpService.postFormData("ashx/BusVehicleLs.ashx", param).map((res: Response) => res.json());
    }
    // 车辆详情
    geDetail(id?): Observable<any>{
        return this.httpService.postFormData("ashx/BusVehicleDetail.ashx", {"Id": id})
        .map((res: Response) => res.json());
    }
    // 车辆添加
    add(param?): Observable<any>{
        return this.httpService.postFormData("ashx/BusVehicleLsAdd.ashx", param).map((res: Response) => res.json());
    }
    // 车辆修改
    mod(param?): Observable<any>{
        return this.httpService.postFormData("ashx/BusVehicleLsMod.ashx", param).map((res: Response) => res.json());
    }

    // 车辆审批员列表 不传clmc是第一级审批人员，第二级要传clmc
    ClsqAddSpry(param = {}): Observable<any>{
        return this.httpService.postFormData("ashx/ClsqAddSpry.ashx", param).map((res: Response) => res.json());
    }

    // 车辆状态
    geStatus(status?): Observable<any>{
        return this.httpService.postFormData("ashx/BusQuery.ashx", {"Status": status})
        .map((res: Response) => res.json());
    }

    // 驾驶员列表
    getDriverList(param): Observable<any>{
        return this.httpService.postFormData("ashx/DriverLs.ashx", param).map((res: Response) => res.json());
    }
    // 驾驶员详情
    getDriverDetails(id?): Observable<any>{
        return this.httpService.postFormData("ashx/DriverDetails.ashx", {"Id": id})
        .map((res: Response) => res.json());
    }
    // 驾驶员添加
    driverAdd(param): Observable<any>{
        return this.httpService.postFormData("ashx/DriverAdd.ashx", param).map((res: Response) => res.json());
    }
    // 驾驶员修改
    driverMod(param): Observable<any>{
        return this.httpService.postFormData("ashx/DriverMod.ashx", param).map((res: Response) => res.json());
    }

    driverDel(id): Observable<any>{
        return this.httpService.postFormData("ashx/DriverDel.ashx", {"Id": id})
        .map((res: Response) => res.json());
    }
}
