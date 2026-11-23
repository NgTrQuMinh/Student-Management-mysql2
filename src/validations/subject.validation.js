import Joi from 'joi';

const maMon = Joi.string().trim().min(1).max(20).messages({
    'string.base': 'Mã môn phải là chuỗi',
    'string.empty': 'Mã môn không được để trống',
    'string.min': 'Mã môn không được để trống',
    'string.max': 'Mã môn không được vượt quá 20 ký tự',
    'any.required': 'Mã môn là bắt buộc',
});

const tenMonHoc = Joi.string().trim().min(1).max(255).messages({
    'string.base': 'Tên môn học phải là chuỗi',
    'string.empty': 'Tên môn học không được để trống',
    'string.min': 'Tên môn học không được để trống',
    'string.max': 'Tên môn học không được vượt quá 255 ký tự',
    'any.required': 'Tên môn học là bắt buộc',
});

const soTinChi = Joi.number().integer().min(1).max(20).messages({
    'number.base': 'Số tín chỉ phải là số',
    'number.integer': 'Số tín chỉ phải là số nguyên',
    'number.min': 'Số tín chỉ phải từ 1 đến 20',
    'number.max': 'Số tín chỉ phải từ 1 đến 20',
    'any.required': 'Số tín chỉ là bắt buộc',
});

export const createSubjectSchema = Joi.object({
    ma_mon: maMon.required(),
    ten_mon: tenMonHoc.required(),
    so_tin_chi: soTinChi.required(),
});

export const updateSubjectSchema = Joi.object({
    ma_mon: maMon.required(),
    ten_mon: tenMonHoc.required(),
    so_tin_chi: soTinChi.required(),
});