import { IResponse, IDataGet } from "../types/Response";

export const Success = (
  msg: string,
  dataGet: IDataGet = [],
  isCreated?: boolean
): IResponse => {
  let data: IResponse = {
    success: true,
    message: msg,
    payload: dataGet,
    code: isCreated ? 201 : 200,
    error: [],
  };

  return data;
};

export const Error = (
  msg: string,
  dataGet: IDataGet = [],
  statusCode: number = 500
): IResponse => {
  // List of common HTTP request code
  const codes = [400, 401, 404, 403, 422, 500 , 409];

  // Get matched code
  const findCode = codes.find((code) => code == statusCode);
  if (!findCode) statusCode = 500;
  else statusCode = findCode;

  let data: IResponse = {
    success: false,
    message: msg,
    payload: dataGet,
    code: statusCode,
    error: [],
  };
  return data;
};
