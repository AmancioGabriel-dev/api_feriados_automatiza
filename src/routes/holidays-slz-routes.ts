import { HolidaySlzController } from "@/controllers/holidays-slz-controller";
import { Router } from "express";

const holidaySlzRoutes = Router()

const holidaySlzController = new HolidaySlzController()

holidaySlzRoutes.get("/" , holidaySlzController.index)
holidaySlzRoutes.post("/" , holidaySlzController.create)
holidaySlzRoutes.delete("/:id" , holidaySlzController.delete)

export { holidaySlzRoutes }