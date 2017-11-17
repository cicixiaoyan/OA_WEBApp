/**
 * Created by yanxiaojun on 2017/4/13.
 */
import { Injectable } from '@angular/core';

@Injectable()
export class GlobalData {

    private _Uid: string;
    private _Name: string;
    // private _token: string;


    get Uid(): string {
        return this._Uid;
    }

    set Uid(value: string) {
        this._Uid = value;
    }

    get Name(): string {
        return this._Name;
    }

    set Name(value: string) {
        this._Name = value;
    }

    // get token(): string {
    //   return this._token;
    // }

    // set token(value: string) {
    //   this._token = value;
    // }
}
