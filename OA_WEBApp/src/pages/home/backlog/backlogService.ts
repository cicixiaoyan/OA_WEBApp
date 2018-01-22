import { Injectable } from '@angular/core';
import { Response } from "@angular/http";
import 'rxjs/add/operator/map';
// import {Observable} from "rxjs";
import { HttpService } from "../../../providers/HttpService";

@Injectable()
export class BacklogService {
    Status: object = {
        notdone: 0, // 未办理
        done: 1 // 已办理
    };

    constructor(public httpService: HttpService) {
    }

    save(param?) {// 第一步提交审核意见
        param.verb = "01";
        return this.httpService.postFormData('/ashx/TodoLs.ashx', param).map((res: Response) => res.json());
    }
    savePass(param?) {// 第一步保存并通过
        param.verb = "02";
        return this.httpService.postFormData('/ashx/TodoLs.ashx', param).map((res: Response) => res.json());
    }
    saveFail(param?) {// 第一步保存并驳回
        param.verb = "03";
        return this.httpService.postFormData('/ashx/TodoLs.ashx', param).map((res: Response) => res.json());
    }

    passSteps2(param?) {// 第二步通过
        param.verb = "04";
        return this.httpService.postFormData('/ashx/TodoLs.ashx', param).map((res: Response) => res.json());
    }
    failSteps2(param?) {// 第二步驳回
        param.verb = "05";
        return this.httpService.postFormData('/ashx/TodoLs.ashx', param).map((res: Response) => res.json());
    }
    getList(param?) {// 待办列表
        param.verb = "31";
        return this.httpService.postFormData('/ashx/TodoLs.ashx', param).map((res: Response) => res.json());
    }
    getDetail(param?) {// 待办详情
        param.verb = "32";
        return this.httpService.postFormData('/ashx/TodoLs.ashx', param).map((res: Response) => res.json());
    }
    getAffix(param?) {// 第一步待办详情附件
        param.verb = "33";
        return this.httpService.postFormData('/ashx/TodoLs.ashx', param).map((res: Response) => res.json());
    }
    failData(param?) {// 第二步驳回数据
        param.verb = "34";
        return this.httpService.postFormData('/ashx/TodoLs.ashx', param).map((res: Response) => res.json());
    }
    passData(param?) {// 第二步通过数据
        param.verb = "35";
        return this.httpService.postFormData('/ashx/TodoLs.ashx', param).map((res: Response) => res.json());
    }
    reviewersLs(param?) {// 第二步审批人员
        param.verb = "36";
        return this.httpService.postFormData('/ashx/TodoLs.ashx', param).map((res: Response) => res.json());
    }


}
