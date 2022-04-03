export class HttpCustomError extends Error {
  constructor(public httpStatusCode: number
    , message?: string) {
    super(message);
  }
}