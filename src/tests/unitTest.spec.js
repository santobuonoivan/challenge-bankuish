const chai = require('chai');
const request = require('supertest');

const {sortCourses, buidSortResult } = require('./../components/study_schedule/StudyScheduleServices');
const expect = chai.expect;

describe('tests sort courses', function () {
    let couses = [
        {
            "desiredCourse": "A",
            "requiredCourse": "B"
        },
        {
            "desiredCourse": "B",
            "requiredCourse": "C"
        },
        {
            "desiredCourse": "C",
            "requiredCourse": "D"
        },
        {
            "desiredCourse": "D",
            "requiredCourse": "E"
        },
    ];

    /** with repetition */
    let cousesWithRepetition = [
        {
            "desiredCourse": "A",
            "requiredCourse": "B"
        },
        {
            "desiredCourse": "B",
            "requiredCourse": "D"
        },
        {
            "desiredCourse": "C",
            "requiredCourse": "D"
        },
        {
            "desiredCourse": "D",
            "requiredCourse": "E"
        },
    ];

    it('should have return a list of study schedules ordered', async () => {
        const result = sortCourses(couses);
        
        expect( result ).to.be.eql([
            {
                "desiredCourse": "D",
                "requiredCourse": "E"
            },
            {
                "desiredCourse": "C",
                "requiredCourse": "D"
            },
            {
                "desiredCourse": "B",
                "requiredCourse": "C"
            },
            {
                "desiredCourse": "A",
                "requiredCourse": "B"
            },
        ]);
    });

    it('should have return a list of study schedules names ordered', async () => {
        const result = sortCourses(couses);
        const courseNameList = buidSortResult(result);
        expect( courseNameList ).to.be.eql([
            "E",
            "D",
            "C",
            "B",
            "A",
        ]);
    });

    
    it('should have return a list of study schedules ordered with repetition', async () => {
        const result = sortCourses(cousesWithRepetition);
        
        expect( result ).to.be.eql([
            {
                "desiredCourse": "D",
                "requiredCourse": "E"
            },
            {
                "desiredCourse": "B",
                "requiredCourse": "D"
            },
            {
                "desiredCourse": "C",
                "requiredCourse": "D"
            },
            {
                "desiredCourse": "A",
                "requiredCourse": "B"
            },
        ]);
        const courseNameWithRepetitionList = buidSortResult(result);
        expect( courseNameWithRepetitionList ).to.be.eql([
            "E",
            "D",
            "B",
            "C",
            "A",
        ]);
    });

   
});