/**
 * Created by yanxiaojun on 2017/4/13.
 */
import { Injectable } from '@angular/core';

@Injectable()
export class GlobalData {

    private _ui_id: string;
    private _ui_desc: string;
    // private _token: string;


    get ui_id(): string {
        return this._ui_id;
    }

    set ui_id(value: string) {
        this._ui_id = value;
    }

    get ui_desc(): string {
        return this._ui_desc;
    }

    set ui_desc(value: string) {
        this._ui_desc = value;
    }

    // get token(): string {
    //   return this._token;
    // }

    // set token(value: string) {
    //   this._token = value;
    // }
}
