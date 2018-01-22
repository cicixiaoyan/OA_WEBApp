/**
 * Created by yanxiaojun on 2017/4/13.
 */
import { Injectable } from '@angular/core';

@Injectable()
export class GlobalData {

    private _Uid: string;
    private _Name: string;
    private _token: string;

    private _APP_SERVE_URL: string = "http://192.168.0.225:55555/";
    private _FILE_SERVE_URL: string = this._APP_SERVE_URL;
    private _APP_VERSION_SERVE_URL: string = this._APP_SERVE_URL;

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

    get token(): string {
      return this._token;
    }

    set token(value: string) {
      this._token = value;
    }

    get APP_SERVE_URL(): string {
      return this._APP_SERVE_URL;
    }

    set APP_SERVE_URL(value: string) {
      this._APP_SERVE_URL = value;
    }

    get FILE_SERVE_URL(): string {
      return this._APP_SERVE_URL;
    }

    set FILE_SERVE_URL(value: string) {
      this._FILE_SERVE_URL = value;
    }

    get APP_VERSION_SERVE_URL(): string {
      return this._APP_SERVE_URL;
    }

    set APP_VERSION_SERVE_URL(value: string) {
      this._APP_VERSION_SERVE_URL = value;
    }
}
