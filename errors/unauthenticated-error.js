const CustomAPIError = require('./custom-api');

class UnauthenticatedError extends CustomAPIError {
    constructor(message) {
        super(message);
        this.error = 401;
    }
}

module.exports = UnauthenticatedError;