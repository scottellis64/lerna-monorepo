export interface ResponseError {
  message: string;
}

export interface Response<T = any> {
  data?: T;
  isLoading: boolean;
  error?: ResponseError;
}
