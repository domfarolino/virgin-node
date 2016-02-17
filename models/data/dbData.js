/**
 * Import TCDB connector module
 */
var mysql = require('promise-mysql');
var config = require('config');

/**
 * Import config json data
 */
var db = config.get('database-configuration');

function connect() {
  return mysql.createConnection({
            host:     db.host,
            user:     db.user,
            password: db.pass,
            database: db.name
        }).then(function(connection) {
            console.log(" * Successful connection to database");
            return connection;
        }).catch(function(error) {
            console.log(error);
        });
}

function getUsers() {
    var users = [];
    var query = "SELECT * FROM users";
    return connect().then(function(connection) {

        return connection.query(query).then(function(rows) {
            rows.forEach(function(row, i) {
                users.push(
                    {
                        "id": row.id,
                        "profile_picture": row.profile_picture,
                        "username": row.username,
                        "provider": row.provider
                    }
                );
            });
            return users;
        });

    }).catch(function(error) {
        console.log("Error in getAllUsers connect");
    });
}

module.exports = {
  getUsers: getUsers
};