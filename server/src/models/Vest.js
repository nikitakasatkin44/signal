module.exports = (sequelize, DataTypes) => {
    return sequelize.define('Vest', {
        path: DataTypes.STRING,
        originalname: DataTypes.STRING,
        description: DataTypes.TEXT,
        price: DataTypes.STRING
    })
};