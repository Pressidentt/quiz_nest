import { PartialType } from '@nestjs/mapped-types';
import { IsNotEmpty, IsString } from 'class-validator';
import { CreateQuestionDto } from './create-question.dto';

export class UpdateQuestionDto  {

  @IsString() 
  @IsNotEmpty()
  text: string;

}
