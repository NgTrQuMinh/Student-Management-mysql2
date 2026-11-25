import * as PointServices from '../services/PointServices.js';
import { asyncHandler } from '../utils/asyncHandler.js';
import { sendResponse } from '../utils/sendResponse.js';

export const getAllPoint = asyncHandler(async (req, res) => {
    const result = await PointServices.getAllPoint(req.query);
    return sendResponse(res, 200, result, 'Lấy danh sách Point thành công');
})

export const getPointById = asyncHandler(async (req, res) => {
    const result = await PointServices.getPointById(req.params.id);
    return sendResponse(res, 200, result, 'Lấy chi tiết Point thành công');
})

export const createPoint = asyncHandler(async (req, res) => {
    const result = await PointServices.createPoint(req.body);
    return sendResponse(res, 201, result, 'Tạo Point thành công');
})

export const updatePoint = asyncHandler(async (req, res) => {
    const result = await PointServices.updatePoint(req.params.id, req.body);
    return sendResponse(res, 200, result, 'Cập nhật Point thành công');
})

export const deletePoint = asyncHandler(async (req, res) => {
    await PointServices.deletePoint(req.params.id);
    return res.status(204).end();
})