import * as StudentServices from '../services/StudentServices.js';
import { asyncHandler } from '../utils/asyncHandler.js';
import { sendResponse } from '../utils/sendResponse.js';

export const getAllStudents = asyncHandler(async (req, res) => {
    const result = await StudentServices.getAllStudents(req.query);
    return sendResponse(res, 200, result, 'Lấy danh sách Student thành công');
})

export const getStudentById = asyncHandler(async (req, res) => {
    const result = await StudentServices.getStudentsById(req.params.id);
    return sendResponse(res, 200, result, 'Lấy chi tiết Student thành công');
})

export const createStudents = asyncHandler(async (req, res) => {
    const result = await StudentServices.createStudents(req.body);
    return sendResponse(res, 201, result, 'Tạo Student thành công');
})

export const updateStudents = asyncHandler(async (req, res) => {
    const result = await StudentServices.updateStudents(req.params.id, req.body);
    return sendResponse(res, 200, result, 'Cập nhật Student thành công');
})

export const deleteStudents = asyncHandler(async (req, res) => {
    await StudentServices.deleteStudents(req.params.id);
    return res.status(204).end();
})