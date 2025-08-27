import type { Knex } from "knex";


export async function up(knex: Knex): Promise<void> {
    await knex.schema.createTable("holidays_the" , (table) => {
        table.increments("id").primary();
        table.string("holiday_name").notNullable();
        table.integer("day").notNullable();
        table.integer("month").notNullable();
        table.boolean("optional").notNullable();
    })
}


export async function down(knex: Knex): Promise<void> {
    await knex.schema.dropTable("holidays_the")
}

