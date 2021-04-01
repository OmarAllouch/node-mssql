'use strict';

const express = require('express');
const studentController = require('../controllers/studentController');
const router = express.Router();

const { getStudents, getStudentById } = studentController;

router.get('/students', getStudents);
router.get('/students/:id', getStudentById);

module.exports = {
  routes: router
}