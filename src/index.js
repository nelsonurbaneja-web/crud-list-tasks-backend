import { app, PORT } from "./app.js"
import { sequelize } from "./database/database.js"


async function main () {
	try {
		await sequelize.sync({ force: false })
		console.log('db connected')
		app.listen(PORT, () => {
			console.log('App running in port', PORT)
		})
		
	} catch (error) {
		console.log(error)
		throw new Error(error)
	}
	
}

main()