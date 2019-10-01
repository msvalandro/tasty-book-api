import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

import { User } from './user.model';

@Injectable()
export class UsersService {
  constructor(@InjectModel('User') private readonly userModel: Model<User>) {}

  async register(data: User) {
    const user = new this.userModel(data);
    return await user.save();
  }

  async login(data: User) {
    const { email, password } = data;
    return await this.userModel.findOne({ email, password });
  }

  // TODO this method is for development only, remove later
  async showAll() {
    return await this.userModel.find().exec();
  }
}
