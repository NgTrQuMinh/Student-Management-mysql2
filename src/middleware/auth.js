import jwt from 'jsonwebtoken';                       // Xác thực token
import { AppError } from '../utils/appError.js';      // Lớp lỗi tự định nghĩa

export const protect = (req, res, next) => {
    const header = req.headers.authorization;         // Lấy header Authorization

    if (!header || !header.startsWith('Bearer ')) {   // Phải có dạng "Bearer <token>"
        return next(new AppError('Chưa đăng nhập', 401));
    }

    const token = header.split(' ')[1];               // Tách lấy phần token

    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET); // Kiểm tra chữ ký và hạn
        req.user = decoded;                           // Gắn { id, username } vào request
        next();                                       // Cho đi tiếp
    } catch (error) {
        // Chỉ trả 401 cho lỗi token; lỗi khác (vd thiếu JWT_SECRET) để errorHandler xử lý
        if (error instanceof jwt.JsonWebTokenError) {
            return next(new AppError('Token không hợp lệ hoặc đã hết hạn', 401));
        }
        next(error);
    }
};

export const authorizeSelf = (req, res, next) => {
    // Chỉ cho phép thao tác trên chính người dùng đang đăng nhập (dựa vào :id trên URL)
    if (Number(req.params.id) !== req.user.id) {
        return next(new AppError('Bạn không có quyền thao tác người dùng này', 403));
    }
    next();
};
