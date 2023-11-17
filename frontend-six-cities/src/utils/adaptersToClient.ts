// import { OfferDto } from '../dto/offer/offer.dto';
// import { CreateOfferDto } from '../dto/offer/create-offer.dto';
// import { UpdateOfferDto } from '../dto/offer/update-offer.dto';

import { UserDto } from '../dto/user/user.dto';
// import { CreateUserDto } from '../dto/user/create-user.dto';
// import { UpdateUserDto } from '../dto/user/update-user.dto';
// import { LoginUserDto } from '../dto/user/login-user.dto';

// import { FavoriteDto } from '../dto/favorite/favorite.dto';
// import { CreateFavoriteDto } from '../dto/favorite/create-favorite.dto';

// import { CommentDto } from '../dto/comment/comment.dto';
// import { CreateCommentDto } from '../dto/comment/create-comment.dto';

import {
  // Location,
  // City,
  User,
  // Comment,
  // Offer,
  // NewOffer,
  // NewComment,
  // UserAuth,
  // CommentAuth,
  // FavoriteAuth,
  // UserRegister
  } from '../types/types';

// export const adaptFavoriteToClient =
//   (categories: FavoriteDto[]): Categories =>
//     categories
//       .map((category: FavoriteDto) => ({

//       }));

// export const adaptLoginToClient =
//   (user: LoginUserDto): User => ({
//     name: user.name,
//     email: user.email,
//     avatar: user.avatarUrl,
//     token: user.token,
//   });

export const adaptUserToClient =
  (user: UserDto): User => ({
    name: user.name,
    email: user.email,
    avatarUrl: user.avatar,
    type: user.isProType,
  });

// export const adaptOffersToClient =
//   (offers: OfferDto[]): Tickets =>
//     offers
//       .filter((offer: OfferDto) =>
//         offer.user !== null,
//       )
//       .map((offer: OfferDto) => ({
//         id: offer.id,
//         title: offer.title,
//         description: offer.description,
//         publishedDate: offer.postDate,
//         image: offer.image,
//         type: offer.type,
//         commentsCount: offer.commentCount,
//         user: adaptUserToClient(offer.user),
//         categories: adaptCategoriesToClient(offer.categories),
//         price: offer.price,
//       }));

// export const adaptCommentsToClient =
//   (comments: CommentDto[]): Comments =>
//     comments
//       .filter((comment: CommentDto) =>
//         comment.user !== null,
//       )
//       .map((comment: CommentDto) => ({
//         id: comment.id,
//         text: comment.text,
//         publishedDate: comment.postDate,
//         user: adaptUserToClient(comment.user),
//       }));
