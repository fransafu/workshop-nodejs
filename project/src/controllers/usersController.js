const { userService } = require('../services');

const list = async (req, res) => {
    const list = await userService.getList();
    return res.json(list);
}

const create = (req, res) => {
    const { name } = req.body;

    return userService.createUser(name)
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

module.exports = {
    list,
    create,
};
