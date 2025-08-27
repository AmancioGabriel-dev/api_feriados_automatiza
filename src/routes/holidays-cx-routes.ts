import { Router } from "express";
import { HolidayCxController } from "../controllers/holidays-cx-controller";

const holidayCxRoutes = Router()

const holidayCxController = new HolidayCxController() 

holidayCxRoutes.get("/" , holidayCxController.index)
holidayCxRoutes.post("/" , holidayCxController.create)
holidayCxRoutes.delete("/:id" , holidayCxController.delete)

export { holidayCxRoutes }