import Joi from 'joi';

const username = Joi.string().trim().min(3).max(255).messages({
    'string.base': 'Tên đăng nhập phải là chuỗi',
    'string.empty': 'Tên đăng nhập không được để trống',
    'string.min': 'Tên đăng nhập phải có ít nhất 3 ký tự',
    'string.max': 'Tên đăng nhập không được vượt quá 255 ký tự',
    'any.required': 'Tên đăng nhập là bắt buộc',
});

const password = Joi.string().min(6).max(255).messages({
    'string.base': 'Mật khẩu phải là chuỗi',
    'string.empty': 'Mật khẩu không được để trống',
    'string.min': 'Mật khẩu phải có ít nhất 6 ký tự',
    'string.max': 'Mật khẩu không được vượt quá 255 ký tự',
    'any.required': 'Mật khẩu là bắt buộc',
});

const oldPassword = Joi.string().min(6).max(255).messages({
    'string.base': 'Mật khẩu cũ phải là chuỗi',
    'string.empty': 'Mật khẩu cũ không được để trống',
    'string.min': 'Mật khẩu cũ phải có ít nhất 6 ký tự',
    'string.max': 'Mật khẩu cũ không được vượt quá 255 ký tự',
    'any.required': 'Mật khẩu cũ là bắt buộc',
});

const newPassword = Joi.string().min(6).max(255).messages({
    'string.base': 'Mật khẩu mới phải là chuỗi',
    'string.empty': 'Mật khẩu mới không được để trống',
    'string.min': 'Mật khẩu mới phải có ít nhất 6 ký tự',
    'string.max': 'Mật khẩu mới không được vượt quá 255 ký tự',
    'any.required': 'Mật khẩu mới là bắt buộc',
});

export const registerSchema = Joi.object({
    username: username.required(),
    password: password.required(),
});

export const loginSchema = Joi.object({
    username: username.required(),
    password: password.required(),
});

export const changePasswordSchema = Joi.object({
    oldPassword: oldPassword.required(),
    newPassword: newPassword.required(),
});
