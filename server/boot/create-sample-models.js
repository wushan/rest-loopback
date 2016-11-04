module.exports = function(app) {
  //Users
  // app.dataSources.mysqlDs.automigrate('User', function(err) {
  //   if (err) throw err;
  //   app.models.User.create([{
  //     email: "chiangloveslynn@gmail.com",
  //     password: "121214"
  //   }, ], function(err, User) {
  //     if (err) throw err;
  //     console.log('Models created: \n', User);
  //   });
  // });
  app.dataSources.mysqlDs.automigrate('news', function(err) {
    if (err) throw err;
    app.models.news.create([{
      title: "The very first title",
      content: "The very first content"
    }, {
      title: "The very first title 2",
      content: "The very first content 2"
    }, {
      title: "The very first title 3",
      content: "The very first content 3"
    }, ], function(err, news) {
      if (err) throw err;

      console.log('Models created: \n', news);
    });
  });
};