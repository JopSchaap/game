(function(exports){
    /*
   * Client to server: game is complete, the winner is ...
   */
    exports.T_GAME_WON_BY = "GAME-WON-BY";
    exports.O_GAME_WON_BY = {
        type: exports.T.O_GAME_WON_BY,
        data: null
    };

    /*
   * Server to client: abort game (e.g. if second player exited the game)
   */
    exports.O_GAME_ABORTED = {
        type: "GAME-ABORTED"
    };
    exports.S_GAME_ABORTED = JSON.stringify(exports.O_GAME_ABORTED);

    /*
   * Player A to server OR server to Player B: this is the target word
   */
  exports.T_TARGET_CODE = "SET-TARGET-WORD";
  exports.O_TARGET_CODE = {
    type: exports.T_TARGET_CODE,
    data: null
  };

  /*
   * Player B to server OR server to Player A: guessed character
   */
  exports.T_MAKE_A_GUESS = "MAKE-A-GUESS";
  exports.O_MAKE_A_GUESS = {
    type: exports.T_MAKE_A_GUESS,
    data: null
  };

  /*
   * Server to Player A & B: game over with result won/loss
   */
  exports.T_GAME_OVER = "GAME-OVER";
  exports.O_GAME_OVER = {
    type: exports.T_GAME_OVER,
    data: null
  };
})(typeof exports === "undefined" ? (this.Messages = {}) : exports);