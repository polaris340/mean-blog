"use strict";

module.exports = function(sequelize, DataTypes) {
    var User = sequelize.define("user", {
        name: DataTypes.STRING,
        email: {
            type: DataTypes.STRING,
            unique: true
        },
        password: DataTypes.STRING,
        isAdmin: DataTypes.BOOLEAN
    });

    return User;
};