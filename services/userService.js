const UserModel  = require('../models/user');

class UserService {
    // update this method to get list of all users from db
  getUsers() {
    const userRecord = UserModel.createUser({});
    return userRecord;
  }

  saveUser(){
    // update to save user objects in db
  }
}

module.exports = new UserService(); 