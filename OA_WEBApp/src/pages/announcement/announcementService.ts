import { Injectable } from '@angular/core';
import { Response } from "@angular/http";
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Observable';
import { HttpService } from "../../providers/HttpService";

/**
 * Generated class for the AnnouncementPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Injectable()
export class AnnouncementService {
    announcementStatus: object = {
        "enter": "录入", // 录入
        "published": "已发布", // 已发布
        "all": "0" // 全部
    };

    constructor(public httpService: HttpService) {
    }

    ionViewDidLoad() {
        console.log('ionViewDidLoad Login');
    }

    getList(param?): Observable<any>{
        return this.httpService.postFormData("ashx/Announcement.ashx", param)
        .map((res: Response) => res.json());
    }

    detail(key): Observable<any> {
        return this.httpService.postFormData("ashx/AnnouncementDetail.ashx", {"attKey": key})
        .map((res: Response) => res.json());
    }
}
