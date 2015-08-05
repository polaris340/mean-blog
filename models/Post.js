"use strict";

module.exports = function(sequelize, DataTypes) {
    var Post = sequelize.define("post", {
        title: DataTypes.STRING,
        image: DataTypes.STRING(1024),
        description: DataTypes.STRING(512),
        contentUrl: DataTypes.STRING(1024)
    });

    return Post;
};