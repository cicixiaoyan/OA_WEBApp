import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

export interface HomePageInterface {
  title: string;
  component: any;
  icon: string;
  index?: number;
  color: string;
}

@IonicPage()
@Component({
  selector: 'page-home-new',
  templateUrl: 'home-new.html',
})
export class HomeNewPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad HomeNewPage');
  }

  open(name) {
    this.navCtrl.push(name);
  }
  openPage(page: HomePageInterface) {
    // the nav component was found using @ViewChild(Nav)
    // reset the nav to remove previous pages and only have this page
    // we wouldn't want the back button to show in this scenario

    if (page.index) {

        this.navCtrl.parent.select(page.index);
        // this.navCtrl.setRoot(page.component, { tabIndex: page.index });
    } else {
        this.navCtrl.push(page.component);
        // this.nav.parent.setRoot(page.component).catch(() => {
        //   console.log("Didn't set nav root");
        // });
    }


}

}
