import 'dotenv/config';
import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { RecipesModule } from './recipes/recipes.module';

const username = process.env.MONGO_USERNAME;
const password = process.env.MONGO_PASSWORD;

@Module({
  imports: [
    MongooseModule.forRoot(
      `mongodb+srv://${username}:${password}@tastybook-xbxqr.mongodb.net/tasty-book?retryWrites=true&w=majority`,
      { useNewUrlParser: true, useUnifiedTopology: true },
    ),
    RecipesModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
