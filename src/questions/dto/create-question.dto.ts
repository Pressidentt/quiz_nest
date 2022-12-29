import { IsString } from "class-validator";
import { IsBoolean, IsNotEmpty } from "class-validator/types/decorator/decorators";

export class CreateQuestionDto {

  @IsString() 
  @IsNotEmpty()
  text: string;

}
