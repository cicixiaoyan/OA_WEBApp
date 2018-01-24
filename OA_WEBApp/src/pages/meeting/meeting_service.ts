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
        completed: "已完成", // 已完成
    };

    constructor(public httpService: HttpService) {
    }

    getList(param?): Observable<any>{
        return this.httpService.postFormData("ashx/MeetLs.ashx", param).map((res: Response) => res.json());
    }
    // 添加会议
    write(param): Observable<any>{
        return this.httpService.postFormData("ashx/MeetAdd.ashx", param).map((res: Response) => res.json());
    }
    // 会议详情
    read(param): Observable<any> {
        return this.httpService.postFormData("ashx/MeetDetail.ashx", param).map((res: Response) => res.json());
    }
    // 修改会议
    mod(param): Observable<any>  {
        param.verb = "2";
        return this.httpService.postFormData("ashx/MeetMod.ashx", param).map((res: Response) => res.json());
    }
    // 删除会议
    del(param): Observable<any>  {
        param.verb = "1";
        return this.httpService.postFormData("ashx/MeetMod.ashx", param).map((res: Response) => res.json());
    }
    // 会议送审
    goSp(param): Observable<any>  {
        param.verb = "3";
        return this.httpService.postFormData("ashx/MeetMod.ashx", param).map((res: Response) => res.json());
    }
    // 会议室列表
    MeetPlaceLs(): Observable<any>{
        return this.httpService.postFormData("ashx/MeetPlaceLs.ashx", {}).map((res: Response) => res.json());
    }
    // 会议类型
    MeetTypeLs(): Observable<any>{
        return this.httpService.postFormData("ashx/MeetTypeLs.ashx", {}).map((res: Response) => res.json());
    }

    GetMeetingPlaceAndType(): Observable<any>{
        let MeetPlaceLs = this.httpService.postFormData("ashx/MeetPlaceLs.ashx", {}).map((res: Response) => res.json());
        let MeetTypeLs = this.httpService.postFormData("ashx/MeetTypeLs.ashx", {}).map((res: Response) => res.json());
        return Observable.forkJoin([MeetPlaceLs, MeetTypeLs]);
    }
    // 部门列表
    GetDeptLs(): Observable<any>{
        return this.httpService.postFormData("ashx/BmLs.ashx", {}).map((res: Response) => res.json());
    }

    // 会议查询
    MeetFindLs(param): Observable<any>{
        return this.httpService.postFormData("ashx/MeetFindLs.ashx", param).map((res: Response) => res.json());
    }


    // 会议记录列表
    MeetRecordLs(param): Observable<any>{
        return this.httpService.postFormData("ashx/MeetRecordLs.ashx", param).map((res: Response) => res.json());
    }
    // 会议记录详情
    MeetRecordDetail(param): Observable<any>{
        return this.httpService.postFormData("ashx/MeetRecordDetail.ashx", param).map((res: Response) => res.json());
    }
    // 会议记录修改
    MeetRecordMod(param): Observable<any>{
        return this.httpService.postFormData("ashx/MeetRecordMod.ashx", param).map((res: Response) => res.json());
    }
    // 会议审批
    MeetSp(param): Observable<any>{
        return this.httpService.postFormData("ashx/MeetSp.ashx", param).map((res: Response) => res.json());
    }

    // 会议室列表
    MeetRoomLs(param): Observable<any>{
        return this.httpService.postFormData("ashx/MeetMagerLs.ashx", param).map((res: Response) => res.json());
    }
    // 会议室详情
    MeetRoomView(param): Observable<any>{
        return this.httpService.postFormData("ashx/MeetMagerDetail.ashx", param).map((res: Response) => res.json());
    }







}
