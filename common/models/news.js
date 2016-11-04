'use strict';

module.exports = function(News) {
  /**
  * Create a news post
  * @param {object} data
  * @param {Function(Error, string)} callback
  */
  News.create = function(data, callback) {
    var created;
    // TODO
    callback(null, created);
  };
  News.beforeRemote('create', function( ctx, unused, next) {
    //...
      console.log(ctx.req)
      next();
  });
};
