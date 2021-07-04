class Response {
  constructor(statusCode, message = null, data = null, errors = null) {
    this.statusCode = statusCode;
    this.message = message;
    this.data = data;
    this.errors = errors
  }
}

module.exports = Response;
