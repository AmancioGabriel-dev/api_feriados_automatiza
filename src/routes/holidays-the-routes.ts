import { HolidayTheController } from "@/controllers/holidays-the-controller";
import { Router } from "express";

const holidaysTheRoutes = Router()

const holidayTheController = new HolidayTheController()

holidaysTheRoutes.get("/" , holidayTheController.index)
holidaysTheRoutes.post("/" , holidayTheController.create)
holidaysTheRoutes.delete("/:id" , holidayTheController.delete)

export { holidaysTheRoutes }