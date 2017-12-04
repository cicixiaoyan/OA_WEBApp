import { Component, Input  } from '@angular/core';

/**
 * Generated class for the EmptyComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'empty',
  template: `
    <div  text-center padding style="font-size:.9em;">
      <div padding>暂无消息数据！！！</div>
      <img src="assets/img/face/face2.png" height="100">
    </div>
  `
})
export class EmptyComponent {

  @Input() isEmpty: boolean = false;

  constructor() {

  }

}
