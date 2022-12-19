'use strict';

// exceptions
const usernameEmailExistEx = require('../../Exceptions/UsernameEmailExistsException');
const idIncrementException = require('../../Exceptions/IdIncrementDeniedException');
const itemNotFoundException =  require('../../Exceptions/ItemNotFoundException');
const appException = require('../../Exceptions/AppError');

exports.sortCourses = function (courses = []) {
    /** first sort by ref values */
    let sort = courses.sort( (courseA, courseB) => {
        if ( courseA.requiredCourse === courseB.desiredCourse ) {
            return 1;
        } 
        return -1;
    /** second sort by equal refs and name values */
    }).sort( (courseA,courseB) => {
        if ( courseA.requiredCourse === courseB.requiredCourse && courseA.desiredCourse < courseB.desiredCourse) {
            return -1;
        } 
        return 1;
    
    });
    return sort;
};