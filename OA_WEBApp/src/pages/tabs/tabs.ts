import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavParams, Platform } from 'ionic-angular';

// import { Home } from '../home/home';
// import { Mail } from '../mail/mail';
// import { MessagePage } from '../message/message';
// import { AnnouncementPage } from '../announcement/announcement';
// import { Account } from '../account/account';
import { Tabs } from "ionic-angular";
import { BackButtonService } from "../../services/backButtonService";
@IonicPage()
@Component({
    templateUrl: 'tabs.html',
    selector: 'page-tabs',
})
export class TabsPage {
    @ViewChild('mainTabs') tabs: Tabs;

    tab1Root = "Home";
    tab2Root = "MessagePage";
    tab3Root = "AnnouncementPage";
    tab4Root = "Account";
    mySelectedIndex: number;

    constructor(navParams: NavParams, private platform: Platform, public backButtonService: BackButtonService) {
        this.mySelectedIndex = navParams.data.tabIndex || 0;
        this.tab1Root = navParams.data.tab1Component || "Home";

        platform.ready().then(() => {
            this.backButtonService.registerBackButtonAction(this.tabs);
        });
    }



}



// WEBPACK FOOTER //
// ./src/pages/tabs/tabs.ts
