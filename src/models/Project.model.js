import { DataTypes } from 'sequelize'
import { sequelize } from "../database/database.js";
import { TaskModel } from './Task.model.js';

export const ProjectModel = sequelize.define('Project', {
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
	priority: {
		type: DataTypes.INTEGER,
    allowNull: false
	},
	description: {
		type: DataTypes.STRING,
    allowNull: false
	}
})

ProjectModel.hasMany(TaskModel, { foreignKey: 'projectId', sourceKey: 'id' })
TaskModel.belongsTo(ProjectModel, { foreignKey: 'projectId', targetKey: 'id' })