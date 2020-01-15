(function(exports){
    module.exports.MAX_ALLOWED_GUESSES = 10;
    module.exports.GUESS_LENGTH = 4;
    module.exports.WEB_SOCKET_URL = "ws://localhost:3000";
})(typeof module.exports === "undefined" ? (this.setup = {}) :module.exports);