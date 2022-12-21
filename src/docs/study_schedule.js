/**
 *  @swagger
 *  /study_schedule:
 *    post:
 *      tags:
 *          - studySchedule
 *      cosumes:
 *        - application/json
 *      parameters:
 *        - name: Authentication
 *          in: header
 *          required: true
 *          schema:
 *            type: string
 *          example: Bearer eyJhbGciOkpXVCJ9.eyJ1c2VyIjp7I20iLCJuYW.XvUQU_Yd9v3d_JZUDFjs
 *        - in: body
 *          name: body
 *          description: The study schedule data.
 *          schema:
 *            type: object
 *            required:
 *              - userId
 *              - courses
 *            properties:
 *              userId:
 *                type: string
 *                example: asdasd-adsaddq-adadwqd1-12312312
 *              courses:
 *                type: array
 *                items:
 *                  type: object
 *                  properties:
 *                    desiredCourse:
 *                      type: string
 *                      example: B
 *                    requiredCourse:
 *                      type: string
 *                      example: A
 *      description: Use to create a new study schedule.
 *      responses:
 *        '201':
 *          description: A new study schedele list
 *          schema:
 *            type: object
 *            properties:
 *              result:
 *                type: array
 *                items:
 *                  type: string
 *                example: [A,B]
 */
