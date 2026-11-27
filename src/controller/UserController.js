import * as UserServices from '../services/UserServices.js';
import { asyncHandler } from '../utils/asyncHandler.js';
import { sendResponse } from '../utils/sendResponse.js';

export const getAllUsers = asyncHandler(async (req, res) => {
    const result = await UserServices.getAllUsers(req.query);
    return sendResponse(res, 200, result, 'Lấy danh sách User thành công');
})

export const getUserById = asyncHandler(async (req, res) => {
    const result = await UserServices.getUserById(req.params.id);
    return sendResponse(res, 200, result, 'Lấy chi tiết User thành công');
})

export const register = asyncHandler(async (req, res) => {
    const result = await UserServices.register(req.body);
    return sendResponse(res, 201, result, 'Đăng ký User thành công');
})

export const login = asyncHandler(async (req, res) => {
    const result = await UserServices.login(req.body);
    return sendResponse(res, 200, result, 'Đăng nhập User thành công');
})

export const changePassword = asyncHandler(async (req, res) => {
    const result = await UserServices.changePassword(req.user.id, req.body);
    return sendResponse(res, 200, result, 'Đổi mật khẩu User thành công');
})

export const deleteUser = asyncHandler(async (req, res) => {
    const result = await UserServices.deleteUser(req.params.id);
    return sendResponse(res, 200, result, 'Xóa User thành công');
})