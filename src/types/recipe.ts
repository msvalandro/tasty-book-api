import { Document } from 'mongoose';

import { User } from './user';

export interface Recipe extends Document {
  title: string;
  description: string;
  author: User;
}
