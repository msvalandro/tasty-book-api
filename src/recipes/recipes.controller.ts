import {
  Controller,
  Post,
  Get,
  Put,
  Delete,
  Body,
  Param,
} from '@nestjs/common';

import { RecipesService } from './recipes.service';
import { Recipe } from './recipe.model';

@Controller('recipes')
export class RecipesController {
  constructor(private readonly recipesService: RecipesService) {}

  @Get()
  showAllRecipes() {
    return this.recipesService.showAll();
  }

  @Post()
  createRecipe(@Body() data: Recipe) {
    return this.recipesService.create(data);
  }

  @Get(':id')
  readRecipe(@Param('id') id: string) {
    return this.recipesService.read(id);
  }

  @Put(':id')
  updateRecipe(@Param('id') id: string, @Body() data: Recipe) {
    return this.recipesService.update(id, data);
  }

  @Delete(':id')
  deleteRecipe(@Param('id') id: string) {
    return this.recipesService.destroy(id);
  }
}
