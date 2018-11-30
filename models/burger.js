module.exports = function(sequelize, DataTypes){
    var Burgs = sequelize.define("Burgs",{
        burger_name: {type:DataTypes.STRING,allowNull:false,validate:{len:[1]}},
        devoured: {type:DataTypes.BOOLEAN,defaultValue:false},
        createdAt: {type:DataTypes.DATE,allowNull:false,defaultValue:DataTypes.literal("CURRENT_TIMESTAMP")},
        updatedAt: {type:DataTypes.DATE,allowNull:false,defaultValue:DataTypes.literal("CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP")}
    })
    return Burgs;
}