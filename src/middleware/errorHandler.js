export default function errorHandler(err, req, res, next) {
    let status = err.statusCode || 500;
    let message = err.message || 'Lỗi máy chủ';

    if (err.errno === 1062) {
        status = 400;
        message = 'Dữ liệu đã tồn tại';
    }
    if (err.errno === 1452) {
        status = 400;
        message = 'Sinh viên hoặc môn học không tồn tại';
    }

    res.status(status).json({
        success: false,
        message,
    });
}
