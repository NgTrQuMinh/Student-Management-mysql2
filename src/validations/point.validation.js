import Joi from 'joi';

const sinhVienId = Joi.number().integer().positive().messages({
    'number.base': 'ID sinh viên phải là số',
    'number.integer': 'ID sinh viên phải là số nguyên',
    'number.positive': 'ID sinh viên phải lớn hơn 0',
    'any.required': 'ID sinh viên là bắt buộc',
});

const monHocId = Joi.number().integer().positive().messages({
    'number.base': 'ID môn học phải là số',
    'number.integer': 'ID môn học phải là số nguyên',
    'number.positive': 'ID môn học phải lớn hơn 0',
    'any.required': 'ID môn học là bắt buộc',
});

const diem = Joi.number().min(0).max(10).messages({
    'number.base': 'Điểm phải là số',
    'number.min': 'Điểm phải từ 0 đến 10',
    'number.max': 'Điểm phải từ 0 đến 10',
    'any.required': 'Điểm là bắt buộc',
});

export const createPointSchema = Joi.object({
    sinhvien_id: sinhVienId.required(),
    monhoc_id: monHocId.required(),
    diem: diem.required(),
});

export const updatePointSchema = Joi.object({
    sinhvien_id: sinhVienId.required(),
    monhoc_id: monHocId.required(),
    diem: diem.required(),
}).min(1);