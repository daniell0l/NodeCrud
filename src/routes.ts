import { Router } from 'express'
import { CreateCategoryController } from './controller/CreateCategoryController'

const routes = Router()

routes.post("/categories", new CreateCategoryController().handle)


export { routes }