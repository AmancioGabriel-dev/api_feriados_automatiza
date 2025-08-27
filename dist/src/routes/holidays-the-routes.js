"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.holidaysTheRoutes = void 0;
const holidays_the_controller_1 = require("@/controllers/holidays-the-controller");
const express_1 = require("express");
const holidaysTheRoutes = (0, express_1.Router)();
exports.holidaysTheRoutes = holidaysTheRoutes;
const holidayTheController = new holidays_the_controller_1.HolidayTheController();
holidaysTheRoutes.get("/", holidayTheController.index);
holidaysTheRoutes.post("/", holidayTheController.create);
holidaysTheRoutes.delete("/:id", holidayTheController.delete);
//# sourceMappingURL=holidays-the-routes.js.map