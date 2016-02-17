/**
 * Import Modules
 */
var dbData = require('../data/dbData.js');

function getUsers() {
  return dbData.getUsers().then(function(result) {
    console.log("BLL Then");
    console.log(result);
    return result;
  }).catch(function(error) {
    console.log("BLL Catch");
    console.log({"error": error});
    return result;
  });
}

module.exports = {
  getUsers: getUsers
};