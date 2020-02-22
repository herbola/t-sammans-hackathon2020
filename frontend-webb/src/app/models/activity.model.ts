import { User } from "./user.model";

export class Activity {
  _id: string;
  owner: User;
  label: string;
  price: string;
  users: User[];
  description: string;
  address: string;
  date: Date;
  minSpots: number;
  maxSpots: number;
  constructor(options: any = {}) {
    this.owner = options.owner;
    this.label = options.label;
    this.price = options.price;
    this.users = options.users;
    this.description = options.description;
    this.address = options.address;
    this.date = options.date;
    this.maxSpots = options.maxSpots;
    this.minSpots = options.minSpots;
  }
}

export var ActivityTest: Activity = new Activity({
  owner: new User({
    firstname: "herman",
    surname: "jansson",
    personalNumber: "199608279015",
    activityIds: []
  }),
  label: "Stadslöpning",
  price: 500,
  minSpots: 10,
  maxSpots: 15,
  description:
    "Välkommen att springa med mig! Jag lär ut löptips och peppar dig att komma igång eller vidare med din löpträning ",
  address: "Sågstugevägen",
  date: new Date(),
  users: [
    new User({
      firstname: "mattias",
      surname: "gustin",
      personalNumber: "199608279015",
      activityIds: []
    }),
    new User({
      firstname: "test",
      surname: "test",
      personalNumber: "199608179015",
      activityIds: []
    }),
    new User({
      firstname: "olle",
      surname: "gustavsson",
      personalNumber: "199308279015",
      activityIds: []
    })
  ]
});
