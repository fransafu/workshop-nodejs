import { User } from '../models';

const list = async () => {
    const users = await User.find({}).exec();
    return users;
}

const find = async (name) => {
    const user = await User.findOne({ name }).exec();
    return user
}

const create = (name) => {
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

const update = async (name, newName) => {
    const user = await User.findOne({ name }, { _id: 0, __v: 0 });

    if (!user) {
        return Promise.reject(false)
    }
    console.log();
    const datauser = user.toJSON();
    return User.updateOne({
        name
    }, {
        ...datauser,
        ...{ name: newName }
    })
    .then(result => {
        console.log(result);
        return true
    })
    .catch(err => {
        console.error(err);
        return false
    })
}

// delete is a keyword, use 'del'
const del = (name) => {
    return User.findOneAndRemove({ name })
        .then(result => {
            console.log(result);
            return true;
        }).catch(err => {
            console.error(err);
            return false
        })
}


export default {
    list,
    find,
    create,
    update,
    del,
}
