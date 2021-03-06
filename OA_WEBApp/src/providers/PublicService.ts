import { Injectable } from '@angular/core';
import { Response } from "@angular/http";
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Observable';
import { HttpService } from "./HttpService";
// import { UserInfo } from "../../model/UserInfo";

@Injectable()
export class PublicService {
    constructor(public httpService: HttpService) {
    }

    GetDeptLs(): Observable<any>{
        return this.httpService.postFormData("ashx/BmLs.ashx", {}).map((res: Response) => res.json());
    }

    /*
    * 参数说明
    * 6 民族
    * 7 专业
    * 8 职务
    * 9 职称
    * 10员工性质
    * 11部门
    */
    getPublicLs(id): Observable<any>{

        return this.httpService.postFormData("ashx/hrarchives.ashx", {"id": id}).map((res: Response) => res.json());
    }


    // login(user): Observable<any> {
    //     return this.httpService.noTokenPostFormData("ashx/Login.ashx", user).map(responce => responce.json());
    // }

}
