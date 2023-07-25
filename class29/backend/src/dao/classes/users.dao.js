import usersModel from '../models/users.model.js';

export default class UsersDao {
    getUsers = async () => {
        const result = await usersModel.find();
        return result;
    };

    getUserById = async (id) => {
        const result = await usersModel.findById(id);
        return result;
    };

    createUser = async (user) => {
        const result = await usersModel.create(user);
        return result;
    };

    updateUsers = async (id, user) => {
        const result = await usersModel.findByIdAndupdate(id, user);
        return result;
    };
};