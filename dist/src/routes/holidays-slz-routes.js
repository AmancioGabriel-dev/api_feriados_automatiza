"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.holidaySlzRoutes = void 0;
const holidays_slz_controller_1 = require("@/controllers/holidays-slz-controller");
const express_1 = require("express");
const holidaySlzRoutes = (0, express_1.Router)();
exports.holidaySlzRoutes = holidaySlzRoutes;
const holidaySlzController = new holidays_slz_controller_1.HolidaySlzController();
holidaySlzRoutes.get("/", holidaySlzController.index);
holidaySlzRoutes.post("/", holidaySlzController.create);
holidaySlzRoutes.delete("/:id", holidaySlzController.delete);
//# sourceMappingURL=holidays-slz-routes.js.map