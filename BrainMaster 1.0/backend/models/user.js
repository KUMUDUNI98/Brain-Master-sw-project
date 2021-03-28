'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {

    static associate(models) {
      // Paper added
      User.hasMany(models.Paper, {
        foreignKey: 'added_by',
        as: 'papers',
      });
      // Exam answered
      User.hasMany(models.Exam, {
        foreignKey: 'participant_user',
        as: 'exams',
      });
      // Question asked
      User.hasMany(models.Question, {
        foreignKey: 'asked_by',
        as: 'questions',
      });
    }
  };
  User.init({
    user_id: {
      primaryKey: true,
      type: DataTypes.INTEGER
    },
    f_name: DataTypes.STRING,
    l_name: DataTypes.STRING,
    email: DataTypes.STRING,
    mobile_no: DataTypes.STRING,
    age: DataTypes.INTEGER,
    password: DataTypes.STRING,
    role: DataTypes.STRING,
    total_marks: DataTypes.FLOAT
  }, {
    sequelize,
    modelName: 'User',
  });
  return User;
};