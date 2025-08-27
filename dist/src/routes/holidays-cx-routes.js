"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.holidayCxRoutes = void 0;
const express_1 = require("express");
const holidays_cx_controller_1 = require("@/controllers/holidays-cx-controller");
const holidayCxRoutes = (0, express_1.Router)();
exports.holidayCxRoutes = holidayCxRoutes;
const holidayCxController = new holidays_cx_controller_1.HolidayCxController();
holidayCxRoutes.get("/", holidayCxController.index);
holidayCxRoutes.post("/", holidayCxController.create);
holidayCxRoutes.delete("/:id", holidayCxController.delete);
//# sourceMappingURL=holidays-cx-routes.js.map