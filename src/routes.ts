import { Router } from 'express'
import { CreateCategoryController } from './controller/CreateCategoryController'
import { DeleteCategoryController } from './controller/DeleteCategoryController'
import { GetAllCategoriesController } from './controller/GetAllCategoriesController'
import { UpdateCategoryController } from './controller/UpdateCategoryContoller'

const routes = Router()

routes.post("/categories", new CreateCategoryController().handle)
routes.get("/categories", new GetAllCategoriesController().handle)
routes.delete("/categories/:id", new DeleteCategoryController().handle)
routes.put("/categories/:id", new UpdateCategoryController().handle)


export { routes }