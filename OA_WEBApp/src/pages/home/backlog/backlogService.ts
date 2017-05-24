import {Injectable} from '@angular/core';
import {Response} from "@angular/http";
import 'rxjs/add/operator/map';
// import {Observable} from "rxjs";
import {HttpService} from "../../../providers/HttpService";

@Injectable()
export class BacklogService {
  constructor(public httpService: HttpService) {
  }

  getNotDoneList(param?){
    return this.httpService.get('../../assets/data/backlog-done.json').map((res: Response) => res.json());
  }

  getDoneList(param?) {
    return this.httpService.get('../../assets/data/backlog-done.json').map((res: Response) => res.json());
  }

//   getInboxList(param?):Observable<any>{
//       return this.httpService.postFormData("url",param).map((res: Response) => res.json());
//   }

//   getOutboxList(param?):Observable<any> {
//     return this.httpService.postFormData("url",param).map((res: Response) => res.json());
//   }

}
