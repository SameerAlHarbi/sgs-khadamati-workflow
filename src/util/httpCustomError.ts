export default class HttpCustomError extends Error {
  constructor(
    public httpStatusCode: number,
    public data: any,
    message?: string
  ) {
    super(message);
  }
}
