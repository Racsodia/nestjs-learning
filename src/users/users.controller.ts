import { Body, Controller, Get, Post } from '@nestjs/common';
import { UsersService } from './users.service';
import { User } from './users.entity';

@Controller('users')
export class UsersController {

    constructor(private userService: UsersService){}

    @Get()
    getAllUsers() : User[]{
        return this.userService.getAllUsers()
    }

    @Post()
    createUser(@Body() user: User){
        return this.userService.createUser(user);
    }
}
