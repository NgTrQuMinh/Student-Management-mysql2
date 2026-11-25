import * as Point from '../model/Point.js';
import { AppError } from '../utils/appError.js';

const notFound = () => new AppError('Không tìm thấy điểm sinh viên', 404);

export const getAllPoint = async () => {
    return await Point.getAllPoint();
}

export const getPointById = async (id) => {
    const result = await Point.getPointById(id);
    if (!result) throw notFound();
    return result;
}

export const createPoint = async (data) => {
    return await Point.createPoint(data);
}

export const updatePoint = async (id, data) => {
    const existing = await Point.getPointById(id);
    if (!existing) throw notFound();
    return await Point.updatePoint(id, data);
};


export const deletePoint = async (id) => {
    const existing = await Point.getPointById(id);
    if (!existing) throw notFound();
    return await Point.deletePoint(id);
};