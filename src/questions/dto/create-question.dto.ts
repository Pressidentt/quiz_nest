import { IsNotEmpty, IsNumber, IsOptional, IsString } from "class-validator";

export class CreateQuestionDto {

  @IsString() 
  @IsNotEmpty()
  text: string;

  @IsString()
  @IsOptional()
  feedback: string;

  @IsOptional()
  @IsNumber()
  score: number;
}
