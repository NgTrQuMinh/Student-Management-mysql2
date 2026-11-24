import { pool } from '../config/db.js';

const COLUMNS = 'id, ma_sv, ho_ten, email, lop_id, created_at';

export const getAllStudents = async () => {
    const sql = `SELECT ${COLUMNS} FROM sinhvien`;
    const [rows] = await pool.query(sql);
    return rows;
}

export const getStudentsById = async (id) => {
    const sql = `SELECT ${COLUMNS} FROM sinhvien WHERE id = ?`;
    const [rows] = await pool.execute(sql, [id]);
    return rows[0] || null;
}

export const createStudents = async (data) => {
    const { ma_sv, ho_ten, email, lop_id } = data;
    const sql = `insert into sinhvien (ma_sv,ho_ten,email,lop_id)values (?,?,?,?)`;
    const [rows] = await pool.execute(sql, [ma_sv, ho_ten, email, lop_id]);
    return { id: rows.insertId, ma_sv, ho_ten, email, lop_id };
}

export const updateStudents = async (id, data) => {
    const GetStudents = await getStudentsById(id);
    const { ma_sv, ho_ten, email, lop_id } = data;
    const sql = `update sinhvien set 
      ma_sv = ?,
      ho_ten = ?,
      email = ?,
      lop_id = ?
    where id = ?`;
    const [rows] = await pool.execute(sql, [ma_sv, ho_ten, email, lop_id, GetStudents.id]);
    return { id: GetStudents.id, ma_sv, ho_ten, email, lop_id, affectedRows: rows.affectedRows };
}

export const deleteStudents = async (id) => {
    const GetStudents = await getStudentsById(id);
    const sql = `delete from sinhvien where id = ?`;
    const [rows] = await pool.execute(sql, [GetStudents.id]);
    return rows.affectedRows > 0;
}