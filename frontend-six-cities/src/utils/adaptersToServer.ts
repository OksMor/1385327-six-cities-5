import { CreateOfferDto, UpdateOfferDto } from '../dto/offer/offer.dto';
import { Housing, City, Feature } from '../dto/offer/offer.dto';

import { UserDto, CreateUserDto, LoginUserDto } from '../dto/user/user.dto';

// import { FavoriteDto } from '../dto/favorite/favorite.dto';
import { CreateCommentDto } from '../dto/comment/comment.dto';
import { getTime } from '../utils';
import {
  // Location,
  // City,
  // CityName,
  Type,
  User,
  UserAuth,
  // Comment,
  UpdateOffer,
  NewOffer,
  // NewComment,
  // UserAuth,
  CommentAuth,
  // FavoriteAuth,
  UserRegister,
  } from '../types/types';

export const adaptTypeToServer = (type: Type): Housing => {
  switch (type) {
    case 'apartment':
      return Housing.Apartment;
    case 'hotel':
      return Housing.Hotel;
    case 'house':
      return Housing.House;
    case 'room':
      return Housing.Room;
    default:
      throw new Error(`Unknown type ${type}`);
  }
};
export const adaptUserToServer = (user: User): UserDto => ({
  name: user.name,
  email: user.email,
  avatar: ' ',
  isProType: (user.type === 'pro'),
});

export const adaptSignupToServer = (user: UserRegister): CreateUserDto => ({
  name: user.name,
  email: user.email,
  avatar: ' ',
  isProType: (user.type === 'pro'),
  password: user.password,
});

export const adaptLoginToServer = (user: UserAuth): LoginUserDto => ({
  email: user.email,
  password: user.password,
});

export const adaptOfferToServer = (offer: NewOffer): CreateOfferDto => ({
  title: offer.title,
  description: offer.description,
  city: offer.city.name as City,
  postDate: getTime(),
  isPremium: offer.isPremium,
  housingType: adaptTypeToServer(offer.type),
  roomCount: offer.bedrooms,
  guestCount: offer.maxAdults,
  rentPrice: offer.price,
  features: offer.goods as Feature[],
  location: [offer.location.latitude.toString(), offer.location.longitude.toString()],
  photos: offer.images,
  preview: offer.previewImage,
});

export const adaptEditOfferToServer = (offer: UpdateOffer): UpdateOfferDto => ({
  id: offer.id,
  title: offer.title,
  description: offer.description,
  city: offer.city.name as City,
  isPremium: offer.isPremium,
  housingType: adaptTypeToServer(offer.type),
  roomCount: offer.bedrooms,
  guestCount: offer.maxAdults,
  rentPrice: offer.price,
  features: offer.goods as Feature[],
  location: [offer.location.latitude.toString(), offer.location.longitude.toString()],
  photos: offer.images,
  preview: offer.previewImage,
});

export const adaptCreateCommentToServer = (comment: CommentAuth): CreateCommentDto => ({
  text: comment.comment,
  offerId: comment.id,
  rating: comment.rating,
});

// export const adaptAvatarToServer =
//   (file: string) => {
//     const formData = new FormData();
//     formData.set('avatar', file);

//     return formData;
//   };

// export const adaptImageToServer =
//   (file: string) => {
//     const formData = new FormData();
//     formData.set('image', file);

//     return formData;
//   };
