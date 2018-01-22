import { Component, ElementRef, Input, Inject, ViewChild, Renderer } from '@angular/core';
// import { IONIC_DIRECTIVES } from "ionic-angular";

@Component({
  selector: 'file-choose',
  template: `
    <button ion-button type="button"  (click)="callback($event)" clear>
      {{btnStyle}}
    </button>
    <input type="file"  (change)="filesAdded($event)" style="display: none" #input /> `
})

export class FileChooseComponent {
  /**
   * The callback executed when button pressed, set by parent
   */
  @Input()  btnStyle: String;

  /**
   * The callback executed when files are selected, set by parent
   */
  @Input() public btnCallback: Function;

  /**
   * Native upload button (hidden)
   */
  @ViewChild("input") private nativeInputBtn: ElementRef;

  /**
   * Constructor
   * @param  {Renderer} renderer for invoking native methods
   * @param  {Log}      logger instance
   */
  constructor(private renderer: Renderer) {}

  /**
   * Callback executed when the visible button is pressed
   * @param  {Event}  event should be a mouse click event
   */
  public callback(event: Event): void {
    // this.logger.debug("upload-button callback executed");

    // trigger click event of hidden input
    let clickEvent: MouseEvent = new MouseEvent("click", {bubbles: true});
    this.renderer.invokeElementMethod(
        this.nativeInputBtn.nativeElement, "dispatchEvent", [clickEvent]);
  }

  /**
   * Callback which is executed after files from native popup are selected.
   * @param  {Event}    event change event containing selected files
   */
  public filesAdded(event: Event): void {
    let files: FileList = this.nativeInputBtn.nativeElement.files;
    // this.logger.debug("Added files", files);
    let path =  window.URL.createObjectURL(files[0]);
    console.log(path);
    this.btnCallback(files, path);
  }

}
