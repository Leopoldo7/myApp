import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

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



@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;
  rootPage: any = HomePage;

  pages: Array<{title: string, component: any}>;

  constructor(public platform: Platform, public statusBar: StatusBar, public splashScreen: SplashScreen) {
    this.initializeApp();

    // used for an example of ngFor and navigation
    this.pages = [
      { title: 'Home', component: HomePage },
      { title: 'Intro', component: IntroPage },
      { title: 'Il Complesso', component: ComplessoPage },
      { title: 'Il Chiostro', component: ChiostroPage },
      { title: 'Affreschi I', component: Affreschi1Page },
      { title: 'Affreschi II', component: Affreschi2Page },
      { title: 'Affreschi III', component: Affreschi3Page },
      { title: 'Affreschi IV', component: Affreschi4Page },
      { title: 'Sala Archeologica', component: SalarcPage },
      { title: 'Sala della Storia', component: SalastoriaPage },
      { title: 'Sala dei Marmi', component: SalamarmiPage },
      { title: 'Sala delle Reliquie', component: SalareliPage },
      { title: 'Area Archeologica', component: ArearcPage },
      { title: 'Coro Clarisse', component: CoroPage },
      { title: 'Sala M.Cristina', component: CristinaPage },
      { title: 'Antico Refettorio', component: RefettorioPage },
      { title: 'Chiostino S.Francesco', component: ChiostrinoPage },
      { title: 'Sala delle Cappe', component: CappePage },
      { title: 'Campanile', component: CampanilePage }
    ];

  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);
  }
}
