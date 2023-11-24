import { UserDto } from "../user/user.dto";

export enum City {
  Paris = 'Paris',
  Cologne = 'Cologne',
  Brussels = 'Brussels',
  Amsterdam = 'Amsterdam',
  Hamburg = 'Hamburg',
  Dusseldorf = 'Dusseldorf'
}

export enum Feature {
  Breakfast = 'Breakfast',
  Conditioning = 'Air conditioning',
  Workspace = 'Laptop friendly workspace',
  BabySeat = 'Baby seat',
  Washer = 'Washer',
  Towels = 'Towels',
  Fridge = 'Fridge'
}

export enum Housing {
  Apartment = 'Apartment',
  House = 'House',
  Room = 'Room',
  Hotel = 'Hotel'
}

export class OfferDto {

  public id!: string;

  public title!: string;
  public description!: string;
  public postDate!: Date;
  public city!: City;
  public preview!: string;
  public photos!: string[];
  public isPremium!: boolean;
  public housingType!: Housing;
  public roomCount!: number;
  public guestCount!: number;
  public rentPrice!: number;
  public features!: Feature[];
  public location!: [string, string];

  public author!: UserDto;

  public rating!: number;
  public isFavorite!: boolean;
  //public commentCount!: number;

}
export class CreateOfferDto {

  public title!: string;
  public description!: string;
  public postDate!: string;
  public city!: City;
  public preview!: string;
  public photos!: string[];
  public isPremium!: boolean;
  public housingType!: Housing;
  public roomCount!: number;
  public guestCount!: number;
  public rentPrice!: number;
  public features!: Feature[];
  public location!: [string, string];

  //public author!: UserDto;

}

export class ShortOfferDto {

  public id!: string;

  public title!: string;
  public postDate!: string;
  public city!: City;
  public location!: [string, string];
  public preview!: string;
  public isPremium!: boolean;
  public isFavorite!: boolean;
  public rating!: number;
  public housingType!: Housing;
  public rentPrice!: number;
  public commentAmount!: number;

}

export class UpdateOfferDto {
  public id!: string;
  public title?: string;
  public description?: string;
  public city?: City;
  public preview?: string;
  public photos?: string[];
  public isPremium?: boolean;
  public housingType?: Housing;
  public roomCount?: number;
  public guestCount?: number;
  public rentPrice?: number;
  public features?: Feature[];
  public location?: [string, string];
}
