'use strict';

const createPetModel = (sequelize, DataTypes) => {
  const Pet = sequelize.define('Pet', {
    name: DataTypes.STRING,
    userId: DataTypes.INTEGER,
  }, {
    timestamps: true,
    underscored: true,
    tableName: 'pets',
  }    
  );

  Pet.associate = (models) => {
    Pet.belongsTo(models.User, {
      foreignKey: 'userId',
      as: 'user',
    });
  }

  return Pet;
}

module.exports = createPetModel;
