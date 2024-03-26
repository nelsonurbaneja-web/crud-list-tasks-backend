import { TaskModel } from "../models/Task.model.js"

export class TaskController {
	static async getTasks(req, res) {
		try {
			const tasks = await TaskModel.findAll()
			console.log({tasks})
			return res.status(200).json({
				tasks
			})
		} catch (error) {
			console.log( error )
      return res.status(500).json({
        message: 'Error al obtener las tareas.',
        error
      })
		}
	}

	static async getTask(req, res) {
		try {
			const taskFind = await TaskModel.findOne({
				where: {
					id: req.params.id,
				},
				attributes: [
					'name', 'done'
				]
			})
			console.log({taskFind})
			return res.status(200).json({
				message: 'tarea encontrada correctamente',
				taskFind
			})
		} catch (error) {
			console.log( error )
      return res.status(500).json({
        message: 'Error al obtener la tarea.',
        error
      })
		}
	}

	static async create (req, res) {
		try {
			const { name, projectId, done } = req.body;

			const taskCreated = await TaskModel.create({
				name,
				done, 
				projectId
			})

			return res.status(201).json({
				message: 'Tarea creada correctamente.',
        taskCreated
      })
		} catch (error) {
				return res.status(500).json({	
					message: 'Error al crear la tarea.',
          error
        })
		}
	}

	static async delete (req, res) {
		try {
			const id = req.params.id;

			console.log({ id })
			const findTask = await TaskModel.findOne({
				where: {
          id
        }
      })

			console.log({ findTask})
			
			if(!findTask) {
				return res.status(404).json({
          message: 'No se encontró la tarea.'
        })
      }

			const taskDelete = await TaskModel.destroy({
				where: {
					id
				}
			})

			console.log({taskDelete})

			return res.status(200).json({
        message: 'Tarea borrada correctamente.',
        taskDelete
      })
		} catch (error) {
			return res.status(500).json({
        message: 'Error al borrar la tarea.',
        error
      })
		}
	}

	static async update(req, res) {
		try {
			const { name, done } = req.body
			const taskFind = await TaskModel.findByPk(req.params.id)

			console.log({ taskFind })

			if(!taskFind) {
				return res.status(404).json({
          message: 'La tarea no existe'
        })
			}

			const taskUpdated = await taskFind.update({
        name,
        done
      })

			return res.status(200).json({
				message: 'Tarea Editada',
        taskUpdated
      })

		} catch (error) {
			console.log( error )
			return res.status(500).json({
        message: 'Error al editar la tarea',
        error
      })
		}	
	}
}
