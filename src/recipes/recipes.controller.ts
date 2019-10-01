import { Controller, Post, Get } from '@nestjs/common';

import { RecipesService } from './recipes.service';

@Controller('recipes')
export class RecipesController {
  constructor(private readonly recipesService: RecipesService) {}

  @Post()
  create() {
    return this.recipesService.insertRecipe('title test', 'description test');
  }
}
