import { Component } from '@angular/core';
import { NavParams } from 'ionic-angular';

import { Home } from '../home/home';
import { Mail } from '../mail/mail';
import { Notice } from '../notice/notice';
import { Account } from '../account/account';


@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = Home;
  tab2Root = Mail;
  tab3Root = Notice;
  tab4Root = Account;
  mySelectedIndex: number;

  constructor(navParams: NavParams) {
    this.mySelectedIndex = navParams.data.tabIndex || 0;
    this.tab1Root = navParams.data.tab1Component || Home;
  }

}



// WEBPACK FOOTER //
// ./src/pages/tabs/tabs.ts