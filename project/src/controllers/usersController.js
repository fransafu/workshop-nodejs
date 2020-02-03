import { userService } from '../services'

const list = async (req, res) => {
    const list = await userService.list();
    return res.json(list);
}

const find = async (req, res) => {
    try {
        const { name } = req.params;
        const user = await userService.find(name)
        return res.status(200).send(user)
    } catch (err) {
        return res.status(500).send({ message: 'Error al encontrar el usuario' })
    }
}

const create = (req, res) => {
    const { name } = req.body;

    return userService.create(name)
        .then((result) => {
            console.log(result);
            return res.send({
                success: true,
                message: 'Usuario creado exitosamente',
            });
        })
        .catch(err => {
            console.error(err);
            return res.send({
                success: false,
                message: 'Error al crear el usuario',
            });
        });

}

const update = (req, res) => {
    const { name } = req.params;

    return userService.update(name, req.body.name)
        .then((result) => {
            console.log(result);
            return res.send({
                success: true,
                message: 'Usuario actualizado exitosamente',
            });
        })
        .catch(err => {
            console.error(err);
            return res.send({
                success: false,
                message: 'Error al actualizar el usuario',
            });
        });
}

const del = (req, res) => {
    const { name } = req.params;

    return userService.del(name)
        .then((result) => {
            console.log(result);
            return res.send({
                success: true,
                message: 'Usuario eliminado exitosamente',
            });
        })
        .catch(err => {
            console.error(err);
            return res.send({
                success: false,
                message: 'Error al eliminar el usuario',
            });
        });
}

export default {
    list,
    find,
    create,
    update,
    del,
};
