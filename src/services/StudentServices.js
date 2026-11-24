import * as Student from '../model/Student.js';
import { AppError } from '../utils/appError.js';

const notFound = () => new AppError('Không tìm thấy học sinh', 404);

export const getAllStudents = async () => {
    return await Student.getAllStudents();
}

export const getStudentsById = async (id) => {
    const result = await Student.getStudentsById(id);
    if (!result) throw notFound();
    return result;
}

export const createStudents = async (data) => {
    return await Student.createStudents(data);
}

export const updateStudents = async (id, data) => {
    const getStudents = await Student.getStudentsById(id);
    if (!getStudents) throw notFound();
    return await Student.updateStudents(getStudents.id, data);
}

export const deleteStudents = async (id) => {
    const getStudents = await Student.getStudentsById(id);
    if (!getStudents) throw notFound();
    return await Student.deleteStudents(getStudents.id);
}