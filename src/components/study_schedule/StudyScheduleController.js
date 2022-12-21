const courseService = require('./StudyScheduleServices');
const courseRepository = require('./StudyScheduleRepository');

exports.createStudySchedule = async function(req,res,next){
    const {courses,userId} = req.body;
    try {
        let sortCourses = courseService.sortCourses(courses);
        let sortCourseList = courseService.buidSortResult(sortCourses);
        if(sortCourseList.length > 0){
            let result = await courseRepository.create(userId, sortCourseList);
            return res.status(201).send({result, status:201});
        }
    }catch (e) {
        if(e instanceof require('../../Exceptions/AppError'))
            return res.status(e.status).json({error:e.message});
        return res.status(400).json({error:e.message})
    }
};

exports.getStudySchedule = async function(req,res,next){
   /*try {
        const { user_id } = req.params;
        let users = await userRepository.getOneUser(user_id);
        return res.status(201).json(users);
    }catch (e) {
        if(e instanceof require('../../Exceptions/AppError'))
            return res.status(e.status).json({error:e.message});
        return res.status(400).json({error:e.message})
    }/*/
};