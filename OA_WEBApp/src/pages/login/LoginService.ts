import { Injectable } from '@angular/core';
import { HttpService } from "../../providers/HttpService";
import { Observable } from "rxjs";
// import { UserInfo } from "../../model/UserInfo";

@Injectable()
export class LoginService {
    constructor(private httpService: HttpService) {
    }

    ionViewDidLoad() {
        console.log('ionViewDidLoad Login');
    }


    login(user): Observable<any> {
        return this.httpService.noTokenPostFormData("ashx/Login.ashx", user).map(responce => responce.json());
        // return Observable.create((observer) => {
        //   observer.next(userInfo);
        // });
    }

}
