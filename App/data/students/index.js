'use strict';

const config = require('../../config');
const sql = require('mssql');

const getStudents = async () => {
  try {
    let pool = await sql.connect(config.sql);
    const list = await pool.request().execute('UP_GET_ALL_STUDENTS');
    return list.recordset;
  } catch (error) {
    return error.message;
  }
}

const getStudentById = async (id) => {
  try {
    let pool = await sql.connect(config.sql);
    let student = await pool.request()
      .input("P__STUDENT_ID", sql.Int, id)
      .execute('GET_STUDENT_BY_STUDENT_ID');
    return student.recordset;
  } catch (error) {
    return error.message;
  }
}

module.exports = {
  getStudents,
  getStudentById
}