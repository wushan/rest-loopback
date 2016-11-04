// // var loopback = require('loopback');
// // var app = module.exports = loopback();
// module.exports = function(app) {
//   // code to set up data source as shown above 
//   var ds = app.createDataSource({
//     connector: require('loopback-component-storage'),
//     provider: 'filesystem',
//     root: '/tmp/storage'
//   });

//   var container = ds.createModel('container');
// };
module.exports = function(server) {
    server.dataSources.Storage.connector.allowedContentTypes = ["image/jpg", "image/jpeg", "image/png"];
}