import * as mongoose from 'mongoose';

export const RecipeSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
});

export interface Recipe extends mongoose.Document {
  id: string;
  title: string;
  description: string;
}
