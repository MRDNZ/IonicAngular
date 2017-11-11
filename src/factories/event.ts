import { Event, IEvent } from '../models/event';

export const EVENT_FACTORY = 'Event';
export type EVENT_FACTORY = typeof EVENT_FACTORY;

const WEDDING = 'Wedding'
type EventType = typeof WEDDING;

const eventAttributes = [
  'id',
  'date',
  'budget',
  'resources',
  'categories',
  'type',
  'status',
  'groups',
  'create_date',
  'update_date',
  'remove_date',
];

const defaultEvent = eventAttributes.reduce((acc, curr, i, arr) => {
  acc[curr] = null;
  return acc;
}, <Event>{});

export const EventFactory = (type?:EventType) => {
  switch(type){
    case WEDDING:
      const weddingEvent = Object.assign(defaultEvent, { type: WEDDING });
      return new Event(weddingEvent);
    default:
      return new Event(defaultEvent);
  }
}
