angular.module('app.services', [])

.factory('database', [function(){
var getConnection = function(){
var pg = require('pg');
var conString = "postgres://postgres:postgrespass@localhost/Node";

    pg.connect(conString, function(err, client, done) {

  if (err) {
    return console.error('error fetching client from pool', err);
  } }
           
)}
    var getByCodigo = function (codigodebarras){
        connect();
        client.query("SEARCH * FROM users");
    }}])

.service('BlankService', [function(){

}]);