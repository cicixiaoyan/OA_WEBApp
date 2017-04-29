import { Component } from '@angular/core';

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

  constructor() {

  }
}



// WEBPACK FOOTER //
// ./src/pages/tabs/tabs.ts