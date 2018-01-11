import { Injectable } from '@angular/core';
import { Response } from "@angular/http";
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Observable';
import { HttpService } from "../../../providers/HttpService";

@Injectable()
export class ContractService {
    constructor(public httpService: HttpService) {
    }


    getList(param): Observable<any> {
        param.verb = 3;
        return this.httpService.postFormData("ashx/hrcontractSel.ashx", param).map((res: Response) => res.json());
    }

}
