import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler, IonicPageModule } from 'ionic-angular';
import { MyApp } from './app.component';

import { TabsPage } from '../pages/tabs/tabs';

import { HomeModule } from '../pages/home/home.module';
import { MailModule } from '../pages/mail/mail.module';
import { NoticeModule } from '../pages/notice/notice.module';
import { AccountModule } from '../pages/account/account.module';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

@NgModule({
  declarations: [
    MyApp,
    TabsPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp,{
      backButtonText: '',  
      iconMode: 'ios',  
      mode: 'ios'
    }),
    HomeModule,
    MailModule,
    NoticeModule,
    AccountModule,
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    TabsPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
