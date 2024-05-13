import { doQuery } from "../../../common/database/mysql.db.js"
import { UserModel , TableName } from "../models/user.schema.js";

const UserService = {
  create: (payload) => {
    return doQuery(`INSERT INTO ${TableName} SET ?`, payload)
    // INSERT INTO USERS SET 'name' = 'ARM', 'birthdate' = '07-05-1995'
  },
  getAll: (columns = UserModel) => {
    const options = [columns, TableName]
    return doQuery(`SELECT ?? FROM ??`, options)
  }
};

export default UserService;
