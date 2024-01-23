import { Injectable } from '@nestjs/common';
import { User } from './users.entity';

@Injectable()
export class UsersService {

    private users: User[] = [
        {name: "Óscar", lastname: "Badilla"},
        {name: "Felipe", lastname: "Romero"}
    ]
    getAllUsers(){
        return this.users;
    }

    createUser(user : User){
       return this.users.push(user)
    }
}
