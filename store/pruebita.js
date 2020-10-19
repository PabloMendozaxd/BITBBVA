const db = {
    'user': [
        { id: 1, name: 'Pablo' },
    ],
};

function list(tabla) {
    return db[tabla];
}

function get(tabla, id) {
    let col = list(tabla);
    return col.filter(item => item.id === id)[0] || null;
}

module.exports = {
    list,
    get,
};