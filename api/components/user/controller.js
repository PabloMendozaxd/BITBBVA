const store = require('../../../store/pruebita');

const TABLA = 'user';

function list() {
    return store.list(TABLA);
}

module.exports = {
    list,
};