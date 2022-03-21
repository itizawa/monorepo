export class User {
  id: string;
  name: string;
  constructor(init: User) {
    this.id = init.id;
    this.name = init.name;
  }
}
