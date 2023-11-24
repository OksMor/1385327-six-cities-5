export class UserDto {

  public name!: string;
  public email!: string;
  public avatar!: string;
  public isProType!: boolean;

}

export class CreateUserDto {

  public name!: string;
  public email!: string;
  public avatar!: string;
  public isProType!: boolean;

  public password!: string;
}

export class LoginUserDto {

  public email!: string;
  public password!: string;
}

export class UpdateUserDto {

  public name?: string;
  public avatar?: string;
}

export class UserWithTokenDto {

  public email!: string ;
  public avatar!: string;
  public name!: string;
  public isProType!: boolean;

  public token!: string;
}
