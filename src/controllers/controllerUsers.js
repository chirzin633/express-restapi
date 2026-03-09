import usersModel from "../models/usersModel.js";

const getAllUsers = async (req, res) => {
    try {
        const [data] = await usersModel.getAllUsers();

        res.json({
            message: 'GET all users success',
            data: data
        });
    } catch (error) {
        res.status(500).json({
            message: 'Server error',
            ServerMessage: error
        });
    }
}

const getUserById = async (req, res) => {
    const { id } = req.params;

    try {
        const [data] = await usersModel.getUserById(id);

        if (data.length === 0) {
            res.status(404).json({
                message: 'User not found',
            });
        }
        res.json({
            message: 'GET users by id success',
            data: data[0]
        });

    } catch (error) {
        res.status(500).json({
            message: 'Server error',
            ServerMessage: error
        });
    }
}

const createNewUser = async (req, res) => {
    const payload = req.body;

    if (!payload.email || !payload.name || !payload.address) {
        return res.status(400).json({
            message: "Anda mengirimkan data yg salah",
            data: null
        });
    }

    try {

        await usersModel.createUser(payload);
        res.status(201).json({
            message: 'Create new user success',
            data: payload
        });
    } catch (error) {
        res.status(500).json({
            message: 'Server error',
            ServerMessage: error
        });
    }
}

const updateUser = async (req, res) => {
    const payload = req.body;
    const { id } = req.params;

    if (!payload.email || !payload.name || !payload.address) {
        return res.status(400).json({
            message: "Anda mengirimkan data yg salah",
            data: null
        });
    }

    try {
        const [data] = await usersModel.updateUser(payload, id);

        if (data.affectedRows === 0) {
            return res.status(404).json({
                message: "User tidak ditemukan",
                data: null
            });
        }

        res.json({
            message: "Update user success",
            data: {
                id: id,
                ...payload
            },
        })
    } catch (error) {
        res.status(500).json({
            message: 'Server error',
            ServerMessage: error
        });
    }
}

const deleteUser = async (req, res) => {
    const { id } = req.params;

    try {
        const [data] = await usersModel.deleteUser(id)

        if (data.affectedRows === 0) {
            res.status(404).json({
                message: "User tidak ditemukan",
                data: null
            });
        }
        res.json({
            message: "Delete user success"
        });
    } catch (error) {
        res.status(500).json({
            message: 'Server error',
            ServerMessage: error
        });
    }
}

export default {
    getAllUsers,
    getUserById,
    createNewUser,
    updateUser,
    deleteUser
};