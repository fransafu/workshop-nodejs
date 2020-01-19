const { userService } = require('../services');

const list = (req, res) => {
    const list = userService.getList();
    return res.json(list);
}

module.exports = {
    list,
};
