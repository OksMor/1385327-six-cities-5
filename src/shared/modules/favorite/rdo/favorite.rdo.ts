import { Expose } from 'class-transformer';

export class FavoriteRdo {
  @Expose()
  public userId: string;

  @Expose()
  public offerId: string;
}