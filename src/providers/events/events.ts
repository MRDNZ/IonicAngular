import { Injectable } from '@angular/core';

import { Api } from '../api/api';
import { Event } from '../../models/event';

@Injectable()
export class Events {

  constructor(public api: Api) { }

  query(params?: any) {
    return this.api.get('/events', params);
  }

  add(event: Event) {
  }

  delete(event: Event) {
  }

}
