"use strict";
// Arquivo para evitar erro de pasta vazia
// Aqui serão adicionadas as rotas da aplicação
Object.defineProperty(exports, "__esModule", { value: true });
exports.routes = void 0;
const express_1 = require("express");
const holidays_cx_routes_1 = require("./holidays-cx-routes");
const holidays_the_routes_1 = require("./holidays-the-routes");
const holidays_slz_routes_1 = require("./holidays-slz-routes");
const routes = (0, express_1.Router)();
exports.routes = routes;
// Rotas para Caxias
routes.use("/holidayscx", holidays_cx_routes_1.holidayCxRoutes);
routes.use("/holidaysthe", holidays_the_routes_1.holidaysTheRoutes);
routes.use("/holidaysslz", holidays_slz_routes_1.holidaySlzRoutes);
//# sourceMappingURL=index.js.map