import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { Step1Page } from '../pages/step1/step1';
import { Step2Page } from '../pages/step2/step2';
import { Step3Page } from '../pages/step3/step3';
import { Step4Page } from '../pages/step4/step4';
import { Step5Page } from '../pages/step5/step5';
import { Step6Page } from '../pages/step6/step6';
import { Step7Page } from '../pages/step7/step7';
import { Step8Page } from '../pages/step8/step8';
import { Step9Page } from '../pages/step9/step9';
import { SharedProvider } from '../providers/shared/shared';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    Step1Page,
    Step2Page,
    Step3Page,
    Step4Page,
    Step5Page,
    Step6Page,
    Step7Page,
    Step8Page,
    Step9Page,
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    Step1Page,
    Step2Page,
    Step3Page,
    Step4Page,
    Step5Page,
    Step6Page,
    Step7Page,
    Step8Page,
    Step9Page,
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    SharedProvider
  ]
})
export class AppModule {}
