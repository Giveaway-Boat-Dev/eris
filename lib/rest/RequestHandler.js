"use strict";

/**
* Handles API requests
*/
class RequestHandler {
    constructor(client) {
        this.client = client;
    }

    /**
    * Make an API request
    * @arg {String} method Uppercase HTTP method
    * @arg {String} url URL of the endpoint
    * @arg {Boolean} [auth] Whether to add the Authorization header and token or not
    * @arg {Object} [body] Request payload
    * @arg {Object} [file] File object
    * @arg {Buffer} file.file A buffer containing file data
    * @arg {String} file.name What to name the file
    * @returns {Promise<Object>} Resolves with the returned JSON data
    */
    request(method, url, auth, body, file, _route, short) {
        return this.client.ipc.requestAPI(method, url, auth, body, file, _route, short, this.client.workerID);
    }

    toString() {
        return "[RequestHandler]";
    }

    toJSON() {
        return {};
    }
}

module.exports = RequestHandler;
