import 'dotenv/config.js';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import * as User from '../model/User.js';
import { AppError } from '../utils/appError.js';

const SALT_ROUND = 10;

const duplicateUsername = () => new AppError('Tên đăng nhập đã tồn tại', 409);
const incorrectUsernameOrPassword = () => new AppError('Sai tên đăng nhập hoặc mật khẩu', 401);
const notFound = () => new AppError('Không tìm thấy người dùng', 404);

export const getAllUsers = async () => {
    return await User.getAllUsers();
}

export const getUserById = async (id) => {
    const result = await User.getUserById(id);
    if (!result) throw notFound();
    return result;
}

export const register = async (data) => {
    const userName = await User.getUserByUsername(data.username);
    if (userName) throw duplicateUsername();

    const hashPass = await bcrypt.hash(data.password, SALT_ROUND);
    try {
        return await User.createUser({ username: data.username, password: hashPass });
    } catch (error) {
        if (error.code === 'ER_DUP_ENTRY') throw duplicateUsername();
        throw error;
    }
};

export const login = async (data) => {
    const user = await User.getUserByUsername(data.username);
    if (!user) throw incorrectUsernameOrPassword();

    const isMatch = await bcrypt.compare(data.password, user.password);
    if (!isMatch) throw incorrectUsernameOrPassword();

    const PAYLOAD = { id: user.id, username: user.username };
    const token = jwt.sign(PAYLOAD, process.env.JWT_SECRET, { expiresIn: process.env.JWT_EXPIRES_IN || '7d' });

    return {
        token,
        user: { id: user.id, username: user.username },
    };
};

export const changePassword = async (id, data) => {
    const user = await User.getUserById(id);
    if (!user) throw notFound();

    const fullUser = await User.getUserByUsername(user.username);   // Dùng username của user, không phải password
    if (!fullUser) throw notFound();

    const checkCompare = await bcrypt.compare(data.oldPassword, fullUser.password);  // So với chuỗi hash, thêm .password
    if (!checkCompare) throw new AppError('Mật khẩu cũ không đúng', 401);   // Sai thì từ chối

    const hashPass = await bcrypt.hash(data.newPassword, SALT_ROUND);
    await User.updatePassword(user.id, hashPass);
};

export const deleteUser = async (id) => {
    const user = await User.getUserById(id);
    if (!user) throw notFound();
    return await User.deleteUser(user.id);
}