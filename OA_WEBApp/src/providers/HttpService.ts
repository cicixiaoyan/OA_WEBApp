/**
 * Created by yanxiaojun617@163.com on 12-27.
 */
import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions, URLSearchParams, RequestOptionsArgs } from '@angular/http';
import 'rxjs/add/operator/toPromise';

import { Observable } from "rxjs";
import { Utils } from "./Utils";
import { GlobalData } from "./GlobalData";
import { APP_SERVE_URL } from './Constants';

@Injectable()
export class HttpService {

    constructor(public http: Http, private globalData: GlobalData) {
    }

    public get(url: string, paramMap?: any): Observable<Response> {
        return this.http.get(url, new RequestOptions({
            search: HttpService.buildURLSearchParams(paramMap)
            , headers: new Headers(
                //   {
                //   'token': this.globalData.token
                // }
            )
        }));
    }

    // 默认Content-Type为application/json;
    public post(url: string, body: any = null, options?: RequestOptionsArgs): Observable<Response> {
        return this.http.post(APP_SERVE_URL + url, body, this.getOptions(options));
    }

    public postFormData(url: string, paramMap?: any): Observable<Response> {
        // let headers = new Headers({
        //   //'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8',
        //   'Content-Type': 'application/json; charset=UTF-8',
        //   'Accept': 'application/json;charset=utf-8'
        //   // ,'token': this.globalData.token
        // });
        let headers = new Headers();
        headers.append('Content-Type', 'application/x-www-form-urlencoded');
        let bodyRes = HttpService.buildURLSearchParams(paramMap).toString();
        let requestOptions = new RequestOptions({ headers: headers });
        return this.http.post(APP_SERVE_URL + url, bodyRes, requestOptions);
    }

    public put(url: string, body: any = null, options?: RequestOptionsArgs): Observable<Response> {
        return this.http.put(APP_SERVE_URL + url, body, this.getOptions(options));
    }

    public delete(url: string, paramMap?: any): Observable<Response> {
        return this.http.delete(APP_SERVE_URL + url, new RequestOptions({
            search: HttpService.buildURLSearchParams(paramMap),
            headers: new Headers(
                // {
                //   'token': this.globalData.token
                // }
            )
        }));
    }

    public patch(url: string, body: any = null, options?: RequestOptionsArgs): Observable<Response> {
        return this.http.patch(APP_SERVE_URL + url, body, this.getOptions(options));
    }

    public head(url: string, paramMap?: any): Observable<Response> {
        return this.http.head(APP_SERVE_URL + url, new RequestOptions({
            search: HttpService.buildURLSearchParams(paramMap),
            headers: new Headers(
                //    {
                //    'token': this.globalData.token
                //  }
            )
        }));
    }

    public options(url: string, paramMap?: any): Observable<Response> {
        return this.http.options(APP_SERVE_URL + url, new RequestOptions({
            search: HttpService.buildURLSearchParams(paramMap)
            , headers: new Headers(
                // {
                //   'token': this.globalData.token
                // }
            )
        }));
    }

    public static buildURLSearchParams(paramMap): URLSearchParams {
        let params = new URLSearchParams();
        if (!paramMap) {
            return params;
        }
        for (let key in paramMap) {
            let val = paramMap[key];
            if (val instanceof Date) {
                val = Utils.dateFormat(val, 'yyyy-MM-dd hh:mm:ss');
            }
            params.set(key, val);
        }
        return params;
    }

    private getOptions(options): RequestOptionsArgs {
        if (!options) {
            options = new RequestOptions({
                headers: new Headers(
                    // {
                    //  'token': this.globalData.token
                    // }
                )
            });
            return options;
        }
    }

}
