import { OfferDto } from '../dto/offer/offer.dto';
import { Housing } from '../dto/offer/offer.dto';

import { UserDto, UserWithTokenDto } from '../dto/user/user.dto';

// import { FavoriteDto } from '../dto/favorite/favorite.dto';
// import { CreateFavoriteDto } from '../dto/favorite/create-favorite.dto';

import { CommentDto } from '../dto/comment/comment.dto';

import { UserType } from '../const';
import { getTime } from '../utils';
import {
  // Location,
  // City,
  Type,
  User,
  Comment,
  Offer,
  //ShortOffer,
  // NewOffer,
  // NewComment,
  // UserAuth,
  // CommentAuth,
  // FavoriteAuth,
  // UserRegister
  } from '../types/types';

export const adaptHousingTypeToClient = (housingType: Housing): Type => {
  switch (housingType) {
    case Housing.Apartment:
      return 'apartment';
    case Housing.Hotel:
      return 'hotel';
    case Housing.House:
      return 'house';
    case Housing.Room:
      return 'room';
    default:
      throw new Error(`Unknown type ${housingType}`);
  }
};
// export const adaptLoginToClient =
//   (user: UserWithTokenDto): User => ({
//     name: user.name,
//     email: user.email,
//     type: user.isProType ? UserType.Pro : UserType.Regular,
//     avatarUrl: user.avatar
//   });
export const adaptUserToClient = (user: UserDto): User => ({
  name: user.name,
  email: user.email,
  avatarUrl: user.avatar,
  type: user.isProType ? UserType.Pro : UserType.Regular,
});

export const adaptOfferToClient = (offer: OfferDto): Offer => ({
  id: offer.id,
  price: offer.rentPrice,
  rating: offer.rating,
  title: offer.title,
  isPremium: offer.isPremium,
  isFavorite: offer.isFavorite,
  city: {
    name: offer.city,
    location: {
      latitude: Number(offer.location[0]),
      longitude: Number(offer.location[1])
    },
  },
  location: {
    latitude: Number(offer.location[0]),
    longitude: Number(offer.location[1])
  },
  previewImage: offer.preview,
  type: adaptHousingTypeToClient(offer.housingType),
  bedrooms: offer.roomCount,
  description: offer.description,
  goods: offer.features,
  images: offer.photos,
  maxAdults: offer.guestCount,
  host: adaptUserToClient(offer.author),
});

// export const adaptFavoriteToClient =
//   (categories: FavoriteDto[]): Categories =>
//     categories
//       .map((category: FavoriteDto) => ({
//       }));

export const adaptLoginToClient = (user: UserWithTokenDto): User => ({
  name: user.name,
  email: user.email,
  avatarUrl: user.avatar,
  type: user.isProType ? UserType.Pro : UserType.Regular,
  //token: user.token,
});

export const adaptOffersToClient = (offers: OfferDto[]): Offer[] => offers.map((offer) => adaptOfferToClient(offer));

export const adaptCommentToClient = (comment: CommentDto): Comment =>({
  comment: comment.text,
  rating: comment.rating,
  date: comment.postDate,
  user: adaptUserToClient(comment.author),
  id: comment.id,
});

export const adaptCommentsToClient = (comments: CommentDto[]): Comment[] => comments.map((comment) => adaptCommentToClient(comment));
