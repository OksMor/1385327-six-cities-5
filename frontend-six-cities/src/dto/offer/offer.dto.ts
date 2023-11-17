enum City {
  Paris = 'Paris',
  Cologne = 'Cologne',
  Brussels = 'Brussels',
  Amsterdam = 'Amsterdam',
  Hamburg = 'Hamburg',
  Dusseldorf = 'Dusseldorf'
}

enum Feature {
  Breakfast = 'Breakfast',
  Conditioning = 'Air conditioning',
  Workspace = 'Laptop friendly workspace',
  BabySeat = 'Baby seat',
  Washer = 'Washer',
  Towels = 'Towels',
  Fridge = 'Fridge'
 }

enum Housing {
  Apartment = 'Apartment',
  House = 'House',
  Room = 'Room',
  Hotel = 'Hotel'
}

export default class OfferDto {

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

  public author!: string;
}
