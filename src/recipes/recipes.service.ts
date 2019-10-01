import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

import { Recipe } from './recipe.model';

@Injectable()
export class RecipesService {
  constructor(
    @InjectModel('Recipe') private readonly recipeModel: Model<Recipe>,
  ) {}

  async showAll() {
    return await this.recipeModel.find().exec();
  }

  async create(data: Recipe) {
    const recipe = new this.recipeModel(data);
    await recipe.save();
    return recipe;
  }

  async read(id: string) {
    return await this.recipeModel.findById(id).exec();
  }

  async update(id: string, data: Recipe) {
    const { title, description } = data;
    const updatedRecipe = await this.recipeModel.findById(id).exec();

    if (title) {
      updatedRecipe.title = title;
    }

    if (description) {
      updatedRecipe.description = description;
    }

    return await updatedRecipe.save();
  }

  async destroy(id: string) {
    await this.recipeModel.deleteOne({ _id: id }).exec();
    return { deleted: true };
  }
}
