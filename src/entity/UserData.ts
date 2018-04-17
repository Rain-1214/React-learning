
interface Person {
  id: number;
  name: string;
  friends: number[];
}

export default class UserData {

  static persons: Person[] = [
    { id: 0, name: 'Michelle', friends: [ 1, 2, 3 ] },
    { id: 1, name: 'Sean', friends: [ 0, 3 ] },
    { id: 2, name: 'Kim', friends: [ 0, 1, 3 ], },
    { id: 3, name: 'David', friends: [ 1, 2 ] }
  ];

  static findPersonById (id: number): Person {
    return this.persons.find(e => e.id === id) as Person;
  }
   
}