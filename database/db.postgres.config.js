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
const _ = require('lodash');
const bcrypt = require('bcryptjs');
//const userServices = require('../components/users/UserServices');


const db ={};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.studySchedule = require('../components/study_schedule/StudyScheduleModel')(sequelize,Sequelize);
db.studyScheduleConfig = require('../components/study_schedule/StudyScheduleConfigModel')(sequelize,Sequelize);

db.studySchedule.hasMany(db.studyScheduleConfig);
db.studyScheduleConfig.belongsTo(db.studySchedule);

/*
db.users.belongsToMany(db.roles, {through:'user_roles', foreignKey:'user_id'});
db.roles.belongsToMany(db.users, {through: 'user_roles', foreignKey: 'role_id'});
db.users.belongsToMany(db.permissions, {through: 'permission_user', foreignKey:'user_id'});
db.permissions.belongsToMany(db.users, {through:'permission_user', foreignKey:'permission_id'});
db.roles.belongsTo(db.roles, {foreignKey:'parent'});
db.permissions.belongsToMany(db.roles, {through: 'permission_role', foreignKey:'permission_id'});
*/
db.sequelize.sync({force:true}).then(() =>  {
});

module.exports =  db;
