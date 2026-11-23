import * as Subject from '../model/Subject.js';
import { AppError } from '../utils/appError.js';

const notFound = () => new AppError('Không tìm thấy môn học', 404);

export const getAllSubject = async () => {
    return Subject.getAllSubject();
}

export const getSubjectById = async (id) => {
    const result = await Subject.getSubjectById(id);
    if (!result) throw notFound();
    return result;
}

export const createSubject = async (data) => {
    return Subject.createSubject(data);
}

export const updateSubject = async (id, data) => {
    const result = await Subject.getSubjectById(id);
    if (!result) throw notFound();
    return Subject.updateSubject(id, data);
}

export const deleteSubject = async (id) => {
    const result = await Subject.getSubjectById(id);
    if (!result) throw notFound();
    return Subject.deleteSubject(id);
}
