import dbPool from "../config/db.js";

const getAllUsers = () => {
    const SQLQuery = 'SELECT * FROM users';

    return dbPool.execute(SQLQuery);
}

const getUserById = (id) => {
    const SQLQuery = 'SELECT * FROM users WHERE id=?';

    return dbPool.execute(SQLQuery, [id]);
}

const createUser = (body) => {
    const SQLQuery = 'INSERT INTO users (name, email, address) VALUES(?,?,?)';

    return dbPool.execute(SQLQuery, [body.name, body.email, body.address]);
}

const updateUser = (body, id) => {
    const SQLQuery = 'UPDATE users SET name=?, email=?, address=? WHERE id=?';

    return dbPool.execute(SQLQuery, [body.name, body.email, body.address, id]);
}

const deleteUser = (id) => {
    const SQLQuery = 'DELETE FROM users WHERE id=?';

    return dbPool.execute(SQLQuery, [id]);
}

export default {
    getAllUsers,
    getUserById,
    createUser,
    updateUser,
    deleteUser
};