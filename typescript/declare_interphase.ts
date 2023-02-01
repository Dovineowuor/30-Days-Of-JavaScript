interface User {
    name: string;
    id: number;
    neighborhood: string;
    contact: number;
  }
   
  class UserAccount {
    name: string;
    id: number;
    neighborhood: string;
    contact: number;
   
    constructor(name: string, id: number, contact: number, neighborhood: string) {
      this.name = name;
      this.id = id;
      this.neighborhood = neighborhood; // added 
      this.contact = contact; // added 
    }
  }
   
  const user: User = new UserAccount("Dovine K", 0,  2541123456789, "Nairobi");
  console.log(user)