export class User implements IUser {
  firstname: string;
  surname: string;
  personNumber: string;
  constructor(iUser: IUser) {
    this.firstname = iUser.firstname;
    this.surname = iUser.surname;
    this.personNumber = iUser.personNumber;
  }
}

export interface IUser {
  firstname: string;
  surname: string;
  personNumber: string;
}
