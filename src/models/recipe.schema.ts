import * as mongoose from 'mongoose';

export const RecipeSchema = new mongoose.Schema(
  {
    title: String,
    description: String,
    author: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
    },
  },
  { timestamps: true },
);
