import { ProjectModel } from "../models/Project.model.js"

export class ProjectController {
	static async getProjects(req, res) {
		try {
			const projects = await ProjectModel.findAll()
			console.log({projects})
			return res.status(200).json({
				projects
			})
		} catch (error) {
			console.log( error )
      return res.status(500).json({
        message: 'Error al obtener los proyectos.',
        error
      })
		}
	}

	static async getProject(req, res) {
		try {
      const project = await ProjectModel.findByPk(req.params.id)

			if(!project) {
				return res.status(404).json({
          message: 'El proyecto no existe.'
        })
			}

      return res.status(200).json({
        project
      })
    } catch (error) {
      console.log( error )
      return res.status(500).json({
        message: 'Error al obtener el proyecto.',
        error
      })
    }
	}

	static async create(req, res) {
		try {
			const project = await ProjectModel.create(req.body)
			return res.status(201).json({
				project
			})	
		} catch (error) {
			console.log( error )
			return res.status(500).json({
        message: 'Error al crear el proyecto.',
        error
      })
		}	
	}

	static async delete(req, res) {
		try {
      const projectDelete = await ProjectModel.destroy({
				where: {
					id: req.params.id
				}
			})

			return res.status(200).json({
				message: 'proyecto borrado',
        projectDelete
      })
    } catch (error) {
      console.log( error )
      return res.status(500).json({
        message: 'Error al borrar el proyecto',
        error
      })
    }
	}

	static async update(req, res) {
		try {
			const { name, description, priority } = req.body
			const projectFind = await ProjectModel.findByPk(req.params.id)

			console.log({ projectFind })

			if(!projectFind) {
				return res.status(404).json({
          message: 'El proyecto no existe'
        })
			}

			const projectUpdate = await projectFind.update({
        name,
        description,
        priority
      })

			return res.status(200).json({
				message: 'proyecto actualizado',
        projectUpdate
      })

		} catch (error) {
			console.log( error )
			return res.status(500).json({
        message: 'Error al editar el proyecto',
        error
      })
		}	
	}
}