import { IsString, IsEmail } from "class-validator";

export default class {
  @IsEmail()
  public email: string;

  @IsString()
  public password: string;
}
