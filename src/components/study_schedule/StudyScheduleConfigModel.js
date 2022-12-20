/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
    return sequelize.define('study_schedules_config', {
      'study_schedules_id': {
        type: DataTypes.INTEGER,
        allowNull: false,
        comment: "null",
        primaryKey: true
      },
      'user_id': {
        type: DataTypes.STRING,
        allowNull: false,
        comment: "null",
        primaryKey: true
      },
      'desired_course': {
        type: DataTypes.STRING,
        allowNull: false,
        comment: "null",
        primaryKey: true
      },
      'sort_value': {
        type: DataTypes.INTEGER,
        allowNull: false,
        comment: "null",
        primaryKey: false
      },   
    }, {
      tableName: 'study_schedules_config'
    });
  };