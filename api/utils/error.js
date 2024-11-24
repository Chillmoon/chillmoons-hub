export const errorHandler = (statusCode, statusMessage) => {
  const error = new Error();
  error.statusCode = statusCode;
  error.message = statusMessage;
  return error;
};
