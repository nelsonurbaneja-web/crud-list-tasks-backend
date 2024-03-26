import { Sequelize } from "sequelize"

export const sequelize = new Sequelize(
	'projectsdb',
  'postgres',
  'root',
	{
    host: 'localhost',
    port: 5432,
    dialect: 'postgres',
    dialectOptions: {
      timezone: "+00:00"
    },
    pool: {
      max: 5,
      min: 0,
      acquire: 60000,
      idle: 10000
    },
    timezone: "+00:00"
  }
)
