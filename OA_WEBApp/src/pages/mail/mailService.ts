import {Injectable} from '@angular/core';
import {Response} from "@angular/http";
import 'rxjs/add/operator/map';
import {Observable} from "rxjs";
import {TestObj} from "./TestObj";
import {HttpService} from "../../providers/HttpService";

@Injectable()
export class MailService {
  constructor(public httpService: HttpService) {
  }

  getInboxList(param?){
    return this.httpService.get('../../assets/data/mail-inbox.json').map((res: Response) => res.json());
  }

  getOutboxList(param?) {
    return this.httpService.get('../../assets/data/mail-outbox.json').map((res: Response) => res.json());
  }

//   getInboxList(param?):Observable<any>{
//       return this.httpService.postFormData("url",param).map((res: Response) => res.json());
//   }

//   getOutboxList(param?):Observable<any> {
//     return this.httpService.postFormData("url",param).map((res: Response) => res.json());
//   }

}
