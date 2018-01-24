import { Injectable } from '@angular/core';
import { Response } from "@angular/http";
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Observable';
import { HttpService } from "../../../providers/HttpService";

@Injectable()
export class ContractService {
    constructor(public httpService: HttpService) {
    }

    // 合同查询
    getList(param): Observable<any> {
        param.verb = 3;
        return this.httpService.postFormData("ashx/hrcontractSel.ashx", param).map((res: Response) => res.json());
    }
    // 合同查询
    getType(): Observable<any> {
        return this.httpService.postFormData("ashx/hrcontractSel.ashx", {"verb": 4}).map((res: Response) => res.json());
    }
    // 合同查询
    getYear(): Observable<any> {
        return this.httpService.postFormData("ashx/hrcontractSel.ashx", {"verb": 5}).map((res: Response) => res.json());
    }
    // 合同续签
    getRenew(param): Observable<any> {
        param.verb = 3;
        return this.httpService.postFormData("ashx/hrcontract.ashx", param).map((res: Response) => res.json());
    }
    // 添加续签
    addRenew(param): Observable<any> {
        param.verb = 0;
        return this.httpService.postFormData("ashx/hrcontract.ashx", param).map((res: Response) => res.json());
    }
    // 删除续签
    delRenew(param): Observable<any> {
        param.verb = 1;
        return this.httpService.postFormData("ashx/hrcontract.ashx", param).map((res: Response) => res.json());
    }
    // 修改续签
    modRenew(param): Observable<any> {
        param.verb = 2;
        return this.httpService.postFormData("ashx/hrcontract.ashx", param).map((res: Response) => res.json());
    }
    // 获取续签类型
    getContractType(): Observable<any> {
        return this.httpService.postFormData("ashx/hrcontract.ashx", {"verb": 4}).map((res: Response) => res.json());
    }

    // 获取合同列表 -- 合同续签时进行筛选
    getContractLs(param): Observable<any> {
        param.verb = "5";
        return this.httpService.postFormData("ashx/hrcontract.ashx", param).map((res: Response) => res.json());
    }





}
