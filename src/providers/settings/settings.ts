import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';

/**
 * A simple settings/config class for storing key/value pairs with persistence.
 */
@Injectable()
export class Settings {
  private SETTINGS_KEY: string = '_settings';

  settings: any;

  defaults: any;
  readyPromise: Promise<any>;

  constructor(public storage: Storage, defaults: any) {
    this.defaults = defaults;
  }

  load() {
    return this.storage.get(this.SETTINGS_KEY).then((value) => {
      if (value) {
        this.settings = value;
        return this.mergeDefaults(this.defaults);
      } else {
        return this.setAll(this.defaults).then((val) => {
          this.settings = val;
        });
      }
    });
  }

  mergeDefaults(defaults: any) {
    for (const key in defaults) {
      if (!(key in this.settings)) {
        this.settings[key] = defaults[key];
      }
    }
    return this.setAll(this.settings);
  }

  merge(settings: any) {
    for (const key in settings) {
      this.settings[key] = settings[key];
    }
    return this.save();
  }

  setValue(key: string, value: any) {
    this.settings[key] = value;
    return this.storage.set(this.SETTINGS_KEY, this.settings);
  }

  setAll(value: any) {
    return this.storage.set(this.SETTINGS_KEY, value);
  }

  getValue(key: string) {
    return this.storage.get(this.SETTINGS_KEY)
      .then(settings =>  settings[key]);
  }

  save() {
    return this.setAll(this.settings);
  }

  get allSettings() {
    return this.settings;
  }
}
