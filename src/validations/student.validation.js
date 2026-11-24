import Joi from 'joi';

const maSinhVien = Joi.string().trim().min(1).max(20).messages({
    'string.base': 'Mã sinh viên phải là chuỗi',
    'string.empty': 'Mã sinh viên không được để trống',
    'string.min': 'Mã sinh viên không được để trống',
    'string.max': 'Mã sinh viên không được vượt quá 20 ký tự',
    'any.required': 'Mã sinh viên là bắt buộc',
});

const hoTen = Joi.string().trim().min(1).max(100).messages({
    'string.base': 'Họ tên phải là chuỗi',
    'string.empty': 'Họ tên không được để trống',
    'string.min': 'Họ tên không được để trống',
    'string.max': 'Họ tên không được vượt quá 100 ký tự',
    'any.required': 'Họ tên là bắt buộc',
});

const email = Joi.string().trim().lowercase().email().max(100).messages({
    'string.base': 'Email phải là chuỗi',
    'string.empty': 'Email không được để trống',
    'string.email': 'Email không hợp lệ',
    'string.max': 'Email không được vượt quá 100 ký tự',
    'any.required': 'Email là bắt buộc',
});

const lopId = Joi.number().integer().min(1).messages({
    'number.base': 'Mã lớp phải là số',
    'number.integer': 'Mã lớp phải là số nguyên',
    'number.min': 'Mã lớp phải lớn hơn 0',
    'any.required': 'Mã lớp là bắt buộc',
});

export const createStudentSchema = Joi.object({
    ma_sv: maSinhVien.required(),
    ho_ten: hoTen.required(),
    email: email.required(),
    lop_id: lopId.required(),
});

export const updateStudentSchema = Joi.object({
    ma_sv: maSinhVien.required(),
    ho_ten: hoTen.required(),
    email: email.required(),
    lop_id: lopId.required(),
}).min(1);
