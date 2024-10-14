const sequelize = require("sequelize");
const db = require("../config/db");
var user = db.define(
    "users",
    {
        id: { type: sequelize.INTEGER, primaryKey: true,autoIncrement:true },
        name: { type: sequelize.STRING },
        email: { type: sequelize.STRING },
        email_verified_at: {   type: 'TIMESTAMP',
        allowNull: true },
        password: { type: sequelize.STRING,allowNull: true },
        remember_token: { type: sequelize.STRING,allowNull: true },
        created_at: {
            type: 'TIMESTAMP',
            defaultValue: sequelize.literal('CURRENT_TIMESTAMP'),
            allowNull: false
          },
          updated_at: {
            type: 'TIMESTAMP',
            defaultValue: sequelize.literal('CURRENT_TIMESTAMP'),
            allowNull: false
          }
    },
    {
        // freeze name table not using *s on name
        freezeTableName: true,
        // dont use createdAt/update
        timestamps: false,
    }
);
db.sync();
module.exports = user;