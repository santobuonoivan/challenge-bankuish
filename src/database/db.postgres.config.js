const env = require('dotenv').config();
const username = process.env.POSTGRES_USER || '';
const password = process.env.POSTGRES_PASSWORD || '';
const database = process.env.POSTGRES_DB || '';
const host = process.env.POSTGRES_HOST || '';
const dialect = process.env.DIALECT || 'postgres';
const pool = process.env.POOL || '';
const Sequelize = require('sequelize');
const sequelize = new Sequelize(database,username,password,{
    host:host,
    dialect:dialect,
    pool:pool

});

const db ={};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.studySchedule = require('../components/study_schedule/StudyScheduleModel')(sequelize,Sequelize);
db.studyScheduleConfig = require('../components/study_schedule/StudyScheduleConfigModel')(sequelize,Sequelize);

db.studySchedule.hasMany(db.studyScheduleConfig);
db.studyScheduleConfig.belongsTo(db.studySchedule);

db.sequelize.sync({force:true}).then(() =>  {
});

module.exports =  db;
