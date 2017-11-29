import { Injectable } from '@angular/core';
import { Response } from "@angular/http";
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Observable';
import { HttpService } from "../../providers/HttpService";

@Injectable()
export class MeetingService {
    meetingStatus: object = {
        Drafting: "起草中", // 起草中
        Delivered: "送审中", // 送审中
        Approved: "已审批", // 已审批
        HasBeenReturned: "已退回", // 已退回
        completed: "已退回", // 已完成
    };

    constructor(public httpService: HttpService) {
    }

    getList(param?): Observable<any>{
        return this.httpService.postFormData("ashx/MeetLs.ashx", param).map((res: Response) => res.json());
    }

    write(param): Observable<any>{
        return this.httpService.postFormData("ashx/MeetAdd.ashx", param).map((res: Response) => res.json());
    }

    read(param): Observable<any> {
        return this.httpService.postFormData("ashx/MeetDetail.ashx", param).map((res: Response) => res.json());
    }

    mod(param): Observable<any>  {
        return this.httpService.postFormData("ashx/MeetMod.ashx", param).map((res: Response) => res.json());
    }

    MeetPlaceLs(): Observable<any>{
        return this.httpService.postFormData("ashx/MeetPlaceLs.ashx", {}).map((res: Response) => res.json());
    }

    MeetTypeLs(): Observable<any>{
        return this.httpService.postFormData("ashx/MeetTypeLs.ashx", {}).map((res: Response) => res.json());
    }

    GetMeetingPlaceAndType(): Observable<any>{
        let MeetPlaceLs = this.httpService.postFormData("ashx/MeetPlaceLs.ashx", {}).map((res: Response) => res.json());
        let MeetTypeLs = this.httpService.postFormData("ashx/MeetTypeLs.ashx", {}).map((res: Response) => res.json());
        return Observable.forkJoin([MeetPlaceLs, MeetTypeLs]);
    }




}
