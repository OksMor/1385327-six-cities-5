import { Middleware } from './middleware.interface.js';
import { StatusCodes } from 'http-status-codes';
import { NextFunction, Request, Response } from 'express';
import { HttpError } from '../errors/index.js';
import { OFFER_STATUSES } from '../../../modules/favorite/index.js';

function isValidStatus(status: string) {
  return !isNaN(Number(status)) &&
    Object.values(OFFER_STATUSES).includes(parseInt(status, 10));
}

export class ValidateStatusMiddleware implements Middleware {
  constructor(private param: string) {}

  execute({ params }: Request, _res: Response, next: NextFunction) {
    const status = params[ this.param ];
    if (isValidStatus(status)) {
      return next();
    }

    throw new HttpError(
      StatusCodes.BAD_REQUEST,
      `Favorite status value '${ status }' must be 0 or 1`,
      'ValidateCityMiddleware'
    );
  }
}
