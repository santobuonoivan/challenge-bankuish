'use strict'
const express = require('express');
const router = express.Router();
const cors = require('cors');
/* firebase auth middleware */
const { decodeToken } = require('../../middleware/authentication');

const courseController = require('./StudyScheduleController');

router.post('/',[cors(), decodeToken ], courseController.createStudySchedule);

router.get('/:study_schedule_id',[cors(),decodeToken], courseController.getStudySchedule);

module.exports = router;
