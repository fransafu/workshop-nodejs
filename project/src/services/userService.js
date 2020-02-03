import { User } from '../models';

const getList = async () => {
    const users = await User.find({}).exec();
    return users;
}

const createUser = (name) => {
    const user = new User({ name });

    return user.save()
        .then((data) => {
            console.log(data);
            return true;
        })
        .catch((err) => {
            console.log(err);
            return false;
        });
}

export {
    getList,
    createUser,
}
