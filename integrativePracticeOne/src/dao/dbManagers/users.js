import {userModel} from '../models/users.js';

export default class Users {
    constructor() {
        console.log('Working users with DB');
    }

    getAll = async() => {
        const users = await userModel.find();
        // Transforma los datos de mongodb a un objeto plano
        return users.map(user => user.toObject());
    }

    save = async(user) => {
        const result = await userModel.create(user);
        return result;
    }
}