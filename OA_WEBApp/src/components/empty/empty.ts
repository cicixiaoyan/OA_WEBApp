import { Component, Input  } from '@angular/core';

@Component({
  selector: 'empty',
  template: `
    <div  text-center padding>
      <img src="assets/img/face/face3.png" style="max-width: 471px;width: 80%;">
      <h4 class="text-ios-gray" padding>{{message}}</h4>
    </div>
  `
})
export class EmptyComponent {

  @Input() isEmpty: boolean = false;
  @Input() message: string = "暂无数据！！！";

  constructor() {
    
  }

}
