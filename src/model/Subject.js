import { pool } from '../config/db.js';

const COLUMNS = 'id, ma_mon, ten_mon, so_tin_chi';

export const getAllSubject = async () => {
    const sql = `SELECT ${COLUMNS} FROM monhoc ORDER BY id ASC`;
    const [rows] = await pool.execute(sql);
    return rows;
};

export const getSubjectById = async (id) => {
    const sql = `SELECT ${COLUMNS} FROM monhoc WHERE id = ?`;
    const [rows] = await pool.execute(sql, [id]);
    return rows[0] || null;
};

export const createSubject = async (data) => {
    const { ma_mon, ten_mon, so_tin_chi } = data;
    const sql = 'INSERT INTO monhoc (ma_mon, ten_mon, so_tin_chi) VALUES (?, ?, ?)';
    const [result] = await pool.execute(sql, [ma_mon, ten_mon, so_tin_chi]);
    return { id: result.insertId, ma_mon, ten_mon, so_tin_chi };
};

export const updateSubject = async (id, data) => {
    const Id = Number(id);
    const { ma_mon, ten_mon, so_tin_chi } = data;
    const sql = 'UPDATE monhoc SET ma_mon = ?, ten_mon = ?, so_tin_chi = ? WHERE id = ?';
    const [result] = await pool.execute(sql, [ma_mon, ten_mon, so_tin_chi, Id]);
    return { id: Id, ma_mon, ten_mon, so_tin_chi, affectedRows: result.affectedRows };
};

export const deleteSubject = async (id) => {
    const sql = 'DELETE FROM monhoc WHERE id = ?';
    const [result] = await pool.execute(sql, [id]);
    return result.affectedRows > 0;
};
