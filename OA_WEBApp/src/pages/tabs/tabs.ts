import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavParams, Platform, Events } from 'ionic-angular';
import { Tabs } from "ionic-angular";
// import { BackButtonService } from "../../services/backButtonService";
@IonicPage()
@Component({
    templateUrl: 'tabs.html',
    selector: 'page-tabs',
})
export class TabsPage {
    @ViewChild('mainTabs') tabs: Tabs;

    tab1Root = "Home";
    tab2Root = "MessagePage";
    tab3Root = "Backlog";
    tab4Root = "Account";
    mySelectedIndex: number;

    messageBadge: string = "";
    todoBadge: string = "";


    constructor(navParams: NavParams, private platform: Platform, 
                public events: Events,
                // public backButtonService: BackButtonService
            ) {
        this.mySelectedIndex = navParams.data.tabIndex || 0;
        this.tab1Root = navParams.data.tab1Component || "Home";
        this.events.subscribe("message: badgechange", badge => {
            this.messageBadge = badge || "";
        });
        this.events.subscribe("todo: badgechange", badge => {
            this.todoBadge = badge || "";
        });

        // platform.ready().then(() => {
        //     this.backButtonService.registerBackButtonAction(this.tabs);
        // });
    }



}



// WEBPACK FOOTER //
// ./src/pages/tabs/tabs.ts
