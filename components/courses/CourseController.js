const courseService = require('./CourseServices');
const courseRepository = require('./CourseRepository');

exports.createStudySchedule = async function(req,res,next){
    const {courses} = req.body;
    try {
        let sortCourses = courseService.sortCourses(courses);
        if(sortCourses.length > 0){
            let result = await courseRepository.create(sortCourses);
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