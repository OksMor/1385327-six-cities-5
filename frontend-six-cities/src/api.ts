import axios, { AxiosInstance, AxiosRequestConfig, AxiosError } from 'axios';
import { toast } from 'react-toastify';

import { Token } from './utils';
import { HttpCode } from './const';
import { ValidationErrorField } from './types/types';

const BACKEND_URL = 'http://localhost:4000';
const REQUEST_TIMEOUT = 5000;

export const createAPI = (): AxiosInstance => {
  const api = axios.create({
    baseURL: BACKEND_URL,
    timeout: REQUEST_TIMEOUT,
  });

  api.interceptors.request.use(
    (config: AxiosRequestConfig) => {
      const token = Token.get();

      if (token) {
        config.headers['Authorization'] = `Bearer ${token}`;
      }

      return config;
    }
  );

  api.interceptors.response.use(
    (response) => response,
    (error: AxiosError) => {
      const { response } = error;
      toast.dismiss();
      //toast.warn(error.response ? error.response.data.error : error.message);

      if (response?.status === HttpCode.BadRequest) {
        if (response.data.details) {
          response.data.details.forEach((detail: ValidationErrorField) => {
            detail.messages.forEach((message) => toast.info(message));
          });
        } else {
          toast.info(response.data.message);
        }
      }

      if (response?.status !== HttpCode.NoAuth) {
        toast.warn(response?.data.message ?? error.message);
      }

      return Promise.reject(error);
    }
  );

  return api;
};

// export const errorHandle = (error: ErrorType): void => {
//   if (!request.isAxiosError(error)) {
//     throw error;
//   }
//   const {response} = error;
//   if (response) {
//     switch (response.status) {
//       case HTTP_CODE.BAD_REQUEST:
//         (response.data.details)
//           ? response.data.details
//             .forEach(
//               (detail: ValidationErrorField) =>
//                 detail.messages
//                   .forEach(
//                     (message: string) => toast.info(message),
//                   ),
//             )
//           : toast.info(response.data.message);
//         break;
//       case HTTP_CODE.UNAUTHORIZED:
//         toast.info(response.data.message);
//         break;
//       case HTTP_CODE.NOT_FOUND:
//         toast.info(response.data.message);
//         break;
//       case HTTP_CODE.CONFLICT:
//         toast.info(response.data.message);
//         break;
//     }
//   }
// };
