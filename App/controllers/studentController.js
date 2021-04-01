'use strict';

const studentData = require('../data/students');

const getStudents = async (req, res, next) => {
  try {
    const students = await studentData.getStudents();
    res.send(students);
  } catch (error) {
    res.status(400).send(error.message);
  }
}

const getStudentById = async (req, res, next) => {
  try {
    const student = await studentData.getStudentById(req.params.id);
    res.send(student);
  } catch (error) {
    res.statues(400).send(error.message);
  }
}

module.exports = {
  getStudents,
  getStudentById
}