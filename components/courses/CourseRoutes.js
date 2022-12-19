'use strict'
const express = require('express');
const router = express.Router();
const cors = require('cors');
const authentication = require('../../middleware/Authentication');
//const authorization = require('./../../middleware/Authorization');
//const {hasCreateUser, hasUpdateUser, hasDeleteUser } = require('./validator/UserValidator');

const courseController = require('./CourseController');

router.post('/study_schedule',[cors()/*, authentication,/* hasCreateUser*/ ], courseController.createStudySchedule);

router.get('/:study_schedule_id',[cors()/*,authentication*/], courseController.getStudySchedule);

module.exports = router;
