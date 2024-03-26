import { DataTypes } from "sequelize";
import { sequelize } from "../database/database.js";

export const TaskModel = sequelize.define('Task', {
	id: {
		type: DataTypes.INTEGER,
		allowNull: false,
		primaryKey: true,
		autoIncrement: true
	},
	name: {
		type: DataTypes.STRING,
    allowNull: false
  },
	done: {
		type: DataTypes.BOOLEAN,
    allowNull: false,
    defaultValue: false
	},
}, {
	timestamps: true
})

