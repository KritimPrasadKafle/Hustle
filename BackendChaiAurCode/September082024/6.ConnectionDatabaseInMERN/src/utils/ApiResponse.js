class ApiResponse {
  constructor(statusCode, data, message = "Success") {
    this.statusCode = statusCode
    this.data = data
    this.message = message
    this.success = this.success < 400
    this.error = this.error
  }
}

export { ApiResponse }