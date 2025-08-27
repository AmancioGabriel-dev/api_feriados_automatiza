"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.up = up;
exports.down = down;
async function up(knex) {
    await knex.schema.createTable("holidays_the", (table) => {
        table.increments("id").primary();
        table.string("holiday_name").notNullable();
        table.integer("day").notNullable();
        table.integer("month").notNullable();
        table.boolean("optional").notNullable();
    });
}
async function down(knex) {
    await knex.schema.dropTable("holidays_the");
}
//# sourceMappingURL=20250826140924_create-holidays-the.js.map