import { pool } from '../config/db.js';

const COLUMNS = 'id, username, created_at, updated_at';

export const getAllUsers = async () => {
    const sql = `SELECT ${COLUMNS} FROM nguoidung ORDER BY id ASC`;
    const [rows] = await pool.execute(sql);
    return rows;
};

export const getUserById = async (id) => {
    const sql = `SELECT ${COLUMNS} FROM nguoidung WHERE id = ?`;
    const [rows] = await pool.execute(sql, [id]);
    return rows[0] || null;
};

export const getUserByUsername = async (username) => {
    const sql = 'SELECT id, username, password, created_at, updated_at FROM nguoidung WHERE username = ?';
    const [rows] = await pool.execute(sql, [username]);
    return rows[0] || null;
};

export const createUser = async (data) => {
    const { username, password } = data;
    const sql = 'INSERT INTO nguoidung (username, password) VALUES (?, ?)';
    const [result] = await pool.execute(sql, [username, password]);
    return { id: result.insertId, username };
};

export const updatePassword = async (id, hashPass) => {
    const sql = 'UPDATE nguoidung SET password = ? WHERE id = ?';      // Chỉ có cột password
    const [result] = await pool.execute(sql, [hashPass, Number(id)]); // Giá trị đi qua dấu ?
    return result.affectedRows > 0;                                    // true nếu có dòng được sửa
};

export const deleteUser = async (id) => {
    const sql = 'DELETE FROM nguoidung WHERE id = ?';
    const [result] = await pool.execute(sql, [id]);
    return result.affectedRows > 0;
};