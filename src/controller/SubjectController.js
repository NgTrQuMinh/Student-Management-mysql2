import * as SubjectServices from '../services/SubjectServices.js';
import { asyncHandler } from '../utils/asyncHandler.js';
import { sendResponse } from '../utils/sendResponse.js';

export const getAllSubject = asyncHandler(async (req, res) => {
    const result = await SubjectServices.getAllSubject(req.query);
    return sendResponse(res, 200, result, 'Lấy danh sách Subject thành công');
});

export const getSubjectById = asyncHandler(async (req, res) => {
    const result = await SubjectServices.getSubjectById(req.params.id);
    return sendResponse(res, 200, result, 'Lấy chi tiết Subject thành công');
});

export const createSubject = asyncHandler(async (req, res) => {
    const result = await SubjectServices.createSubject(req.body);
    return sendResponse(res, 201, result, 'Tạo Subject thành công');
});

export const updateSubject = asyncHandler(async (req, res) => {
    const result = await SubjectServices.updateSubject(req.params.id, req.body);
    return sendResponse(res, 200, result, 'Cập nhật Subject thành công');
});

export const deleteSubject = asyncHandler(async (req, res) => {
    await SubjectServices.deleteSubject(req.params.id);
    return res.status(204).end();
});
