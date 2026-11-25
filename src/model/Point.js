import { pool } from '../config/db.js';

const COLUMNS = 'id, sinhvien_id, monhoc_id, diem, created_at, updated_at';

export const getAllPoint = async () => {
    const sql = `SELECT ${COLUMNS} FROM diem ORDER BY id ASC`;
    const [rows] = await pool.query(sql);
    return rows;
};

export const getPointById = async (id) => {
    const sql = `SELECT ${COLUMNS} FROM diem WHERE id = ?`;
    const [rows] = await pool.execute(sql, [id]);
    return rows[0] || null;
};

export const createPoint = async (data) => {
    const { sinhvien_id, monhoc_id, diem } = data;
    const sql = 'INSERT INTO diem (sinhvien_id, monhoc_id, diem) VALUES (?, ?, ?)';
    const [result] = await pool.execute(sql, [sinhvien_id, monhoc_id, diem]);
    return { id: result.insertId, sinhvien_id, monhoc_id, diem };
};

export const updatePoint = async (id, data) => {
    const pointId = Number(id);
    const { sinhvien_id, monhoc_id, diem } = data;
    const sql = 'UPDATE diem SET sinhvien_id = ?, monhoc_id = ?, diem = ? WHERE id = ?';
    const [result] = await pool.execute(sql, [sinhvien_id, monhoc_id, diem, pointId]);
    return { id: pointId, sinhvien_id, monhoc_id, diem, affectedRows: result.affectedRows };
};

export const deletePoint = async (id) => {
    const sql = 'DELETE FROM diem WHERE id = ?';
    const [result] = await pool.execute(sql, [id]);
    return result.affectedRows > 0;
};