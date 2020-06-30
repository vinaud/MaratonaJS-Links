const TYPE_JSON = 'application/json'
const STATUS_CODE_OK = 200;
const STATUS_CODE_BAD_REQUEST = 400;
const STATUS_CODE_UNAUTHORIZED = 401;
const STATUS_CODE_NOT_FOUND = 404;
const STATUS_CODE_SERVER_ERROR = 500;

const jsonOK =  function(data, message, metadata) {
    const status = STATUS_CODE_OK;
    message = (message) ? message : ('Succesfull Request');
    metadata = (metadata) ? metadata : {};

    this.status(status);
    this.type(TYPE_JSON);

    return this.json({message, data, metadata, status: status});
}

const jsonBadRequest =  function(data, message, metadata) {
    const status = STATUS_CODE_BAD_REQUEST;
    message = (message) ? message : ('Bad Request');
    metadata = (metadata) ? metadata : {};

    this.status(status);
    this.type(TYPE_JSON);

    return this.json({message, data, metadata, status: status});
}

const jsonUnauthorized =  function(data, message, metadata) {
    const status = STATUS_CODE_UNAUTHORIZED;
    message = (message) ? message : ('Unauthorized request.');
    metadata = (metadata) ? metadata : {};

    this.status(status);
    this.type(TYPE_JSON);

    return this.json({message, data, metadata, status: status});
}

const jsonNotFound =  function(data, message, metadata) {
    const status = STATUS_CODE_NOT_FOUND;
    message = (message) ? message : ('Request Not Found.');
    metadata = (metadata) ? metadata : {};

    this.status(status);
    this.type(TYPE_JSON);

    return this.json({message, data, metadata, status: status});
}

const jsonServerError =  function(data, message, metadata) {
    const status = STATUS_CODE_SERVER_ERROR;
    message = (message) ? message : ('Server Error.');
    metadata = (metadata) ? metadata : {};

    this.status(status);
    this.type(TYPE_JSON);

    return this.json({message, data, metadata, status: status});
}

const response = (requisition, response, next) => {
    response.jsonOK = jsonOK;
    response.jsonBadRequest = jsonBadRequest;
    response.jsonUnauthorized = jsonUnauthorized;
    response.jsonNotFound = jsonNotFound;
    response.jsonServerError = jsonServerError;
    next();
}

module.exports = response;