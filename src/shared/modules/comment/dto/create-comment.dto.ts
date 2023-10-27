import { IsMongoId, IsString, Length, Min, Max, IsInt } from 'class-validator';
import { CreateCommentValidationMessages } from './create-comment.messages.js';

export class CreateCommentDto {
  @IsString({ message: CreateCommentValidationMessages.text.invalidFormat })
  @Length(5, 1024, { message: 'min is 5, max is 1024 '})
  public text: string;

  @IsInt({message: CreateCommentValidationMessages.rating.invalidFormat})
  @Min(1,{message: CreateCommentValidationMessages.rating.minValue})
  @Max(5,{message: CreateCommentValidationMessages.rating.maxValue})
  public rating: number;

  @IsMongoId({ message: CreateCommentValidationMessages.offerId.invalidFormat })
  public offerId: string;

  @IsMongoId({ message: CreateCommentValidationMessages.userId.invalidFormat })
  public userId: string;
}
