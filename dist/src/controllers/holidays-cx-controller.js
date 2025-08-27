"use strict";
// Arquivo para evitar erro de pasta vazia
// Aqui serão adicionados os controllers da aplicação
Object.defineProperty(exports, "__esModule", { value: true });
exports.HolidayCxController = void 0;
const AppError_1 = require("@/utils/AppError");
const knex_1 = require("@/database/knex");
const zod_1 = require("zod");
class HolidayCxController {
    async index(request, response, next) {
        try {
            const holidays = await (0, knex_1.knex)("holidays_cx")
                .select("id", "holiday_name", "day", "month", "optional")
                .orderBy([{ column: "month", order: "asc" }, { column: "day", order: "asc" }]);
            if (!holidays || holidays.length === 0) {
                throw new AppError_1.AppError("Holidays can't be found :(");
            }
            return response.json(holidays);
        }
        catch (error) {
            next(error);
        }
    }
    async create(request, response, next) {
        try {
            const bodySchema = zod_1.z.object({
                holiday_name: zod_1.z.string({ message: "holiday_name is required!" }).trim(),
                day: zod_1.z.number().gt(0, { message: "value must be greater than 0" }).lte(31, { message: "value must be less than or equal to 31" }),
                month: zod_1.z.number().gt(0, { message: "value must be greater than 0" }).lte(12, { message: "value must be less than or equal to 12" }),
                optional: zod_1.z.boolean()
            });
            const { holiday_name, day, month, optional } = bodySchema.parse(request.body);
            await (0, knex_1.knex)("holidays_cx").insert({ holiday_name, day, month, optional });
            return response.status(201).json({ message: `${holiday_name} foi criado no banco de dados` });
        }
        catch (error) {
            next(error);
        }
    }
    async delete(request, response, next) {
        try {
            const id = zod_1.z
                .string()
                .transform((value) => Number(value))
                .refine((value) => !isNaN(value), { message: "id must be a number" })
                .parse(request.params.id);
            const holiday = await (0, knex_1.knex)("holidays_cx")
                .select()
                .where({ id })
                .first();
            if (!holiday) {
                throw new AppError_1.AppError("holiday not found");
            }
            await (0, knex_1.knex)("holidays_cx").delete().where({ id });
            return response.json({ message: "holiday was deleted" });
        }
        catch (error) {
            next(error);
        }
    }
}
exports.HolidayCxController = HolidayCxController;
//# sourceMappingURL=holidays-cx-controller.js.map