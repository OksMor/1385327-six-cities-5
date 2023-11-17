// import { OfferDto } from '../dto/offer/offer.dto';
// import { CreateOfferDto } from '../dto/offer/create-offer.dto';
// import { UpdateOfferDto } from '../dto/offer/update-offer.dto';

// import { UserDto } from '../dto/user/user.dto';
import { CreateUserDto } from '../dto/user/create-user.dto';
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

export const adaptSignupToServer =
  (user: User): CreateUserDto => ({
    name: user.name,
    email: user.email,
    avatar: ' ',
    isProType: user.type,
    //password: user.password,
  });

// export const adaptEditTicketToServer =
//   (ticket: TicketEdit): UpdateOfferDto => ({
//     title: ticket.title,
//     description: ticket.description,
//     categories: ticket.categories,
//     postDate: new Date(ticket.publishedDate),
//     type: (ticket.type === OfferType.Buy) ? OfferType.Buy : OfferType.Sell,
//     price: ticket.price,
//   });

// export const adaptCreateTicketToServer =
//   (ticket: TicketCreate): CreateOfferDto => ({
//     title: ticket.title,
//     description: ticket.description,
//     categories: ticket.categories,
//     postDate: getTime(),
//     image: ' ',
//     type: (ticket.type === OfferType.Buy) ? OfferType.Buy : OfferType.Sell,
//     price: ticket.price,
//   });

// export const adaptCreateCommentToServer =
//   (comment: CommentPost): CreateCommentDto => ({
//     text: comment.text,
//     offerId: comment.ticketId,
//   });

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
