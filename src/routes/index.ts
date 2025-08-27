// Arquivo para evitar erro de pasta vazia
// Aqui serão adicionadas as rotas da aplicação

import { Router } from "express";

import { holidayCxRoutes } from "./holidays-cx-routes";
import { holidaysTheRoutes } from "./holidays-the-routes";
import { holidaySlzRoutes } from "./holidays-slz-routes";

const routes = Router()

// Rotas para Caxias
routes.use("/holidayscx" , holidayCxRoutes)

routes.use("/holidaysthe" , holidaysTheRoutes)

routes.use("/holidaysslz" , holidaySlzRoutes)

export { routes }

