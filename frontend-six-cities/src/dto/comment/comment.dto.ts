import { UserDto } from "../user/user.dto";

export class CommentDto {

  public text!: string;

  public rating!: number;

  public id!: string;

  public author!: UserDto;
  public postDate!: string;
}

export class CreateCommentDto {

  public text!: string;

  public rating!: number;

  public offerId!: string;

}
