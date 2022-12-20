'use strict';

const { studySchedule, studyScheduleConfig } = require('../../database/db.postgres.config');
const AppErrorException = require('../../Exceptions/AppError');

exports.create = async function (userId, courses) {
    try{
        const first = courses[0].requiredCourse;
        const studyScheduleList = [ first, ...courses.map( course => course.desiredCourse) ];
        const studyScheduleResult = await studySchedule.create({ user_id: userId});
        for ( let i = 0; i < studyScheduleList.length; i++ ) {
            const course = studyScheduleList[i];
            await studyScheduleConfig.create({
                study_schedules_id: studyScheduleResult.id,
                user_id: userId,
                desired_course: course,
                sort_value: i
            });
            
        }
        
        return studyScheduleList;
    }catch (e) {
        throw new AppErrorException( e.message );
    }
};
