import { Subject } from 'rxjs';
import { User } from '../models/User.model';


export class UserService {
  private users: User[] = [
    new User('Ludo', 'Baens', 'Ludo@gmail.com', 'Vin', ['Musique', 'Resto'])
  ];

  userSubject = new Subject<User[]>();

  emitUsers() {
    this.userSubject.next(this.users.slice());
  }

  addUser(user: User) {
    this.users.push(user);
    this.emitUsers();
  }
}
