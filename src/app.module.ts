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
      host: 'mysql-azimka.alwaysdata.net', 
      port: 3306,
      username: 'azimka',
      password: 'azimka_0308',
      database: 'azimka_backendhw',
      entities: [Answer, Question],
      synchronize: true,
    }),],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
