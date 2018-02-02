import { Pipe, PipeTransform } from '@angular/core';
import { Utils } from '../../providers/Utils';
@Pipe({
  name: 'getdatediff'
})
export class GetdatediffPipe implements PipeTransform {

  show(dateStr: string, showTime: boolean){
    let thisYear = new Date().getFullYear(),
      publishYear = new Date(dateStr).getFullYear(),
      formatStr = "yyyy年MM月dd日 HH时mm分";
    if (!showTime) formatStr = formatStr.replace(" HH时mm分", '');
    if (thisYear === publishYear) formatStr = formatStr.replace("yyyy年", '');
    return Utils.dateFormat(new Date(dateStr), formatStr);
  }

  transform(dateStr: any, showTime: boolean = true): any {
    let publishTime = Date.parse(dateStr.replace(/-/gi, "/")) / 1000,
      d_seconds = 0,
      d_minutes = 0,
      d_hours = 0,
      d_days = 0,
      timeNow = Math.floor(new Date().getTime() / 1000),
      d = 0;

    d = timeNow - publishTime;
    d_days = Math.floor(d / 86400);
    d_hours = Math.floor(d / 3600);
    d_minutes = Math.floor(d / 60);
    d_seconds = Math.floor(d);

    // console.log("d_days" + d_days, "d_hours" + d_hours, "d_minutes" + d_minutes, "d_seconds" + d_seconds);
    if (d > 0){
      if (d_days > 0 && d_days < 3) {
        return d_days + '天前';
      } else if (d_days <= 0 && d_hours > 0) {
        return d_hours + '小时前';
      } else if (d_hours <= 0 && d_minutes > 0) {
        return d_minutes + '分钟前';
      } else if (d_seconds < 60 && d_seconds > 0) {
          return d_seconds + '秒前';
      }else{
        return this.show(dateStr, showTime);
      }
    }
    else{
      return this.show(dateStr, showTime);
    }
     
  }

}