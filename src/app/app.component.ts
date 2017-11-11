import { Component } from '@angular/core';
import { NgRedux, select } from '@angular-redux/store';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { TranslateService } from '@ngx-translate/core';
import { Config, Platform } from 'ionic-angular';
import { Observable } from 'rxjs/Observable';

import { Settings, Events } from '../providers/providers';

import { AppState } from '../reducers/reducers';
import { incrementEnthusiasm, decrementEnthusiasm } from './../actions/actions';

@Component({
  template: `
    <p>{{ enthusiasm | json }}</p>
    <button ion-button icon-only (click)="onIncrement()">
      <ion-icon name="add"></ion-icon>
    </button>
    <button ion-button icon-only (click)="onDecrement()">
      <ion-icon name="remove"></ion-icon>
    </button>
    `,
})
export class MyApp {

  @select(store => store.test) test: Observable<any>;

  enthusiasm: {};

  constructor(platform: Platform,
              settings: Settings,
              public events: Events,
              private store:NgRedux<AppState>,
              private translate: TranslateService,
              private config: Config,
              private statusBar: StatusBar,
              private splashScreen: SplashScreen) {

    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });

    this.getResources();
    this.initTranslate();
  }

  onIncrement() {
    this.store.dispatch(incrementEnthusiasm());
  }

  onDecrement() {
    this.store.dispatch(decrementEnthusiasm());
  }

  getResources() {
    this.events.query().subscribe((response) => {
      console.warn('response', response);

    },                            (error) => {
      console.warn('error', error);
    });

    this.test.subscribe((response) => {
      console.warn('response', response);
      this.enthusiasm = response;

    },                  (error) => {
      console.warn('error', error);
    });
  }

  initTranslate() {
    // Set the default language for translation strings, and the current language.
    this.translate.setDefaultLang('en');

    if (this.translate.getBrowserLang() !== undefined) {
      this.translate.use(this.translate.getBrowserLang());
    } else {
      this.translate.use('en'); // Set your language here
    }

    this.translate.get(['BACK_BUTTON_TEXT']).subscribe((values) => {
      this.config.set('ios', 'backButtonText', values.BACK_BUTTON_TEXT);
    });
  }
}
