import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'tab-slide',
  templateUrl: 'tab-slide.html'
})
export class TabSlideComponent {

  @Input("slides") slides: string[] = [];  // 显示类型的字符串数组
  @Input("pageNumber") pageNumber: number = 3;  // 表示当前屏幕可以显示的类型数目，默认为3。
  @Output("slideClick") slideClick = new EventEmitter<number>();  // 当点击某个类型时，将点击的index返回给使用者

  mySlideOptions;
  selectedIndex: number = 0;

  constructor() {
  }

  ngOnInit() {
    this.mySlideOptions = {
      loop: false,
      autoplay: false,
      initialSlide: 0,
      pager: false,
      slidesPerView: this.pageNumber,
      paginationHide: true,
      paginationClickable: true
    };
  }

  onClick(index) {
    this.selectedIndex = index;
    this.slideClick.emit(index);
  }

}
