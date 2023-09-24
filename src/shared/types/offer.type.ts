import { City } from './city.type.js';
import { Housing } from './housing.enum.js';
import { Feature } from './feature.enum.js';
import { Coords } from './coords.type.js';

export type Offer = {
  title: string;
  description: string;
  postDate: Date;
  city: City;
  preview: string;
  photos: string[];
  isPremium: boolean;
  isFavourite: boolean;
  rating: number;
  housingType: Housing;
  roomCount: number;
  guestCount: number;
  rentPrice: number;
  features: Feature[];
  author: string;
  commentsCount: number;
  location: Coords;
}