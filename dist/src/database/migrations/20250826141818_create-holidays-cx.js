"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.up = up;
exports.down = down;
async function up(knex) {
    await knex.schema.createTable("holidays_cx", (table) => {
        table.increments("id").primary();
        table.string("holiday_name").notNullable();
        table.integer("day").notNullable();
        table.integer("month").notNullable();
        table.boolean("optional").notNullable();
    });
}
async function down(knex) {
    await knex.schema.dropTable("holidays_cx");
}
//# sourceMappingURL=20250826141818_create-holidays-cx.js.map