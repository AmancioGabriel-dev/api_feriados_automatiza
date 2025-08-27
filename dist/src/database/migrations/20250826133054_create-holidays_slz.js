"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.up = up;
exports.down = down;
async function up(knex) {
    await knex.schema.createTable("holidays_slz", (table) => {
        table.increments("id").primary();
        table.string("holiday_name").notNullable();
        table.integer("day").notNullable();
        table.integer("month").notNullable();
        table.boolean("optional").notNullable();
    });
}
async function down(knex) {
    await knex.schema.dropTable("holidays_slz");
}
//# sourceMappingURL=20250826133054_create-holidays_slz.js.map