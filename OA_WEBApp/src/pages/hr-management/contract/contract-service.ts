import { Injectable } from '@angular/core';
import { HttpService } from "../../../providers/HttpService";
import { Observable } from "rxjs";
// import { UserInfo } from "../../model/UserInfo";

@Injectable()
export class ContractService {
    constructor(public httpService: HttpService) {
    }


    // login(user): Observable<any> {
    //     return this.httpService.noTokenPostFormData("ashx/Login.ashx", user).map(responce => responce.json());
    // }

}
