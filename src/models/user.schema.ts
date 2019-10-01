import * as mongoose from 'mongoose';

export const UserSchema = new mongoose.Schema(
  {
    firstname: String,
    lastname: String,
    email: String,
    password: {
      type: String,
      select: false,
    },
  },
  {
    timestamps: true,
  },
);
