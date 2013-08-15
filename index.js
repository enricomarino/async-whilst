  /**
   * Repeatedly call iterator, while test returns true.
   * Calls the callback when stopped, or an error occurs.
   *
   * @param {Function} test test
   * @param {Function} iterator iterator
   * @param {Function} callback callback
   * @api public
   */

  modulo.export = whilst = function (test, iterator, callback) {
    var complete;
    var iterate;

    complete = function (err) {
      if (err) {
        return callback(err);
      }
      iterate();
    };

    iterate = function () {
      if (test()) {
        iterator(complete);
        return;
      }
      callback();
    };

    iterate();
  };
