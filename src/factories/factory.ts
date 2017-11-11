import * as R from 'ramda';
import { eventFactory, EVENT_FACTORY } from './events/event';

type Factory = EVENT_FACTORY;

export const factory = (factory:Factory) => {
  switch (factory){
    case EVENT_FACTORY:
      return eventFactory;
    default:
      throw new Error('No factory provided');
  }
};

export const withConstructor = (constructor:Function) => (obj:any) => {
  const proto = Object.assign({}, Object.getPrototypeOf(obj), { constructor });
  return Object.assign(Object.create(proto), obj);
};


// Set up some functional mixins
const withFlying = (o) => {
  let isFlying = false;
  return {
    ...o,
    fly () {
      isFlying = true;
      return this;
    },
    land () {
      isFlying = false;
      return this;
    },
    get isFlying () {
      return isFlying;
    },
  };
};
const withBattery = ({ capacity }) => (o) => {
  let percentCharged = 100;
  return {
    ...o,
    draw (percent) {
      const remaining = percentCharged - percent;
      percentCharged = remaining > 0 ? remaining : 0;
      return this;
    },
    getCharge: () => percentCharged,
    get capacity () {
      return capacity;
    },
  };
};

export const createDrone = ({ capacity = '3000mAh' }):Event => R.pipe(
  withFlying,
  withBattery({ capacity }),
  withConstructor(Event),
)({});
