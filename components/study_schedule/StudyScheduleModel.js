/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
    return sequelize.define('study_schedules', {
      'id': {
        type: DataTypes.INTEGER,
        autoIncrement: true,
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
    }, {
      tableName: 'study_schedules'
    });
  };