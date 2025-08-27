// Arquivo para evitar erro de pasta vazia
// Aqui serão adicionados os controllers da aplicação

import { AppError } from "../utils/AppError";
import { Request , Response , NextFunction } from "express";
import { knex } from "../database/knex";
import { z } from "zod";

interface HolidayCxRecord {
	id: number
	holiday_name: string
	day: number
	month: number
	optional: number | boolean
}

class HolidayCxController {
	async index(request: Request , response: Response , next: NextFunction) {
		try {
			const holidays = await knex<HolidayCxRecord>("holidays_cx")
				.select("id" , "holiday_name" , "day" , "month" , "optional")
				.orderBy([{ column : "month" , order : "asc"} , { column :"day" , order : "asc"}])

			if(!holidays || holidays.length === 0) {
				throw new AppError("Holidays can't be found :(")
			}

			return response.json(holidays)
		} catch (error) {
			next(error)
		}
	}

	async create(request: Request , response: Response , next: NextFunction){
		try {
			const bodySchema = z.object({
				holiday_name: z.string({ message : "holiday_name is required!"}).trim(),
				day: z.number().gt(0 , { message : "value must be greater than 0"}).lte(31 , { message : "value must be less than or equal to 31"}),
				month : z.number().gt(0 , { message : "value must be greater than 0"}).lte(12 , { message : "value must be less than or equal to 12"}),
				optional : z.boolean()
			})

			const { holiday_name , day ,  month , optional } = bodySchema.parse(request.body)

			await knex<HolidayCxRecord>("holidays_cx").insert({ holiday_name , day ,  month , optional })

			return response.status(201).json( { message : `${holiday_name} foi criado no banco de dados`})

		} catch (error) {
			next(error)
		}
	}

	async delete(request: Request , response: Response , next: NextFunction){
		try {
			const id = z
				.string()
				.transform((value) => Number(value))
				.refine((value) => !isNaN(value) , { message : "id must be a number" })
				.parse(request.params.id)

			const holiday = await knex<HolidayCxRecord>("holidays_cx")
				.select()
				.where({ id })
				.first()
			
			if(!holiday){
				throw new AppError("holiday not found")
			}

			await knex<HolidayCxRecord>("holidays_cx").delete().where({ id })

			return response.json({ message : "holiday was deleted"})

		} catch (error) {
			next(error)
		}
	}
}

export { HolidayCxController }