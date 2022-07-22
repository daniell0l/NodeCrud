import { Router } from 'express'
import { CreateCategoryController } from './controller/CreateCategoryController'
import { DeleteCategoryController } from './controller/DeleteCategoryController'
import { GetAllCategoriesController } from './controller/GetAllCategoriesController'

const routes = Router()

routes.post("/categories", new CreateCategoryController().create)
routes.get("/categories", new GetAllCategoriesController().create)
routes.delete("/categories", new DeleteCategoryController().create)


export { routes }