import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { IntroPage } from '../pages/intro/intro';
import { ComplessoPage } from '../pages/complesso/complesso';
import { ChiostroPage } from '../pages/chiostro/chiostro';
import { Affreschi1Page } from '../pages/affreschi1/affreschi1';
import { Affreschi2Page } from '../pages/affreschi2/affreschi2';
import { Affreschi3Page } from '../pages/affreschi3/affreschi3';
import { Affreschi4Page } from '../pages/affreschi4/affreschi4';
import { SalarcPage } from '../pages/salarc/salarc';
import { SalastoriaPage } from '../pages/salastoria/salastoria';
import { SalamarmiPage } from '../pages/salamarmi/salamarmi';
import { SalareliPage } from '../pages/salareli/salareli';
import { ArearcPage } from '../pages/arearc/arearc';
import { CoroPage } from '../pages/coro/coro';
import { CristinaPage } from '../pages/cristina/cristina';
import { RefettorioPage } from '../pages/refettorio/refettorio';
import { ChiostrinoPage } from '../pages/chiostrino/chiostrino';
import { CappePage } from '../pages/cappe/cappe';
import { CampanilePage } from '../pages/campanile/campanile';


import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    IntroPage,
    ComplessoPage,
    ChiostroPage,
    Affreschi1Page,
    Affreschi2Page,
    Affreschi3Page,
    Affreschi4Page,
    SalarcPage,
    SalastoriaPage,
    SalamarmiPage,
    SalareliPage,
    ArearcPage,
    CoroPage,
    CristinaPage,
    RefettorioPage,
    ChiostrinoPage,
    CappePage,
    CampanilePage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    IntroPage,
    ComplessoPage,
    ChiostroPage,
    Affreschi1Page,
    Affreschi2Page,
    Affreschi3Page,
    Affreschi4Page,
    SalarcPage,
    SalastoriaPage,
    SalamarmiPage,
    SalareliPage,
    ArearcPage,
    CoroPage,
    CristinaPage,
    RefettorioPage,
    ChiostrinoPage,
    CappePage,
    CampanilePage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
