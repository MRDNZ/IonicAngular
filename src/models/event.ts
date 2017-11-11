export interface IEvent {
  id:number|string;
  date:Date|string;
  budget:number|string;
  resources:Array<{}>;
  categories:Array<{}>;
  type:string;
  status:number;
  groups:Array<{}>;
  create_date:Date|string;
  update_date:Date|string;
  remove_date:Date|string;
}

export class Event implements IEvent {
  id;
  date;
  budget;
  resources;
  categories;
  type;
  status;
  groups;
  create_date;
  update_date;
  remove_date;

  constructor(eventObj?:IEvent) {
    if (eventObj) {
      for (const attribute in eventObj) {
        this[attribute] = eventObj[attribute];
      }
    }
  }
}
