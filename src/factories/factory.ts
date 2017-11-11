import { EventFactory, EVENT_FACTORY } from './event';

type Factory = EVENT_FACTORY;

export const factory = (factory:Factory) => {
  switch(factory){
    case EVENT_FACTORY:
      return EventFactory;
    default:
      throw new Error('No factory provided');
  }
}
