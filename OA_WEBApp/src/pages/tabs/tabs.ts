import { Component, ViewChild } from '@angular/core';
import { NavParams } from 'ionic-angular';

import { Home } from '../home/home';
// import { Mail } from '../mail/mail';
import { MessagePage } from '../message/message';
import { AnnouncementPage } from '../announcement/announcement';
import { Account } from '../account/account';
import { Tabs } from "ionic-angular";

@Component({
    templateUrl: 'tabs.html'
})
export class TabsPage {
    @ViewChild('mainTabs') tabs: Tabs;

    tab1Root = Home;
    tab2Root = MessagePage;
    tab3Root = AnnouncementPage;
    tab4Root = Account;
    mySelectedIndex: number;
    
    constructor(navParams: NavParams) {
        this.mySelectedIndex = navParams.data.tabIndex || 0;
        this.tab1Root = navParams.data.tab1Component || Home;
    }

}



// WEBPACK FOOTER //
// ./src/pages/tabs/tabs.ts