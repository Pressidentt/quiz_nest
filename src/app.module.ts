import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { Answer } from './questions/entities/answer.entity';
import { Question } from './questions/entities/question.entity';
import { QuestionsModule } from './questions/questions.module';

@Module({
  imports: [QuestionsModule,
    ConfigModule.forRoot({
      envFilePath: '.env',
    }),
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: process.env.DB_HOST,
      port: Number(process.env.DB_PORT),
      username: process.env.DB_USER,
      password: process.env.DB_PASS,
      database: process.env.DB_NAME,
      entities: [Answer, Question],
      synchronize: true,
    }),],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
