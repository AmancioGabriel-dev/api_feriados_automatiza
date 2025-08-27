"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.seed = seed;
async function seed(knex) {
    // Deletes ALL existing entries
    await knex("holidays_slz").del();
    // Inserts seed entries
    await knex("holidays_slz").insert([
        { holiday_name: "Confraternização Universal", day: 1, month: 1, optional: false },
        { holiday_name: "Tiradentes", day: 21, month: 4, optional: false },
        { holiday_name: "Dia do Trabalhador", day: 1, month: 5, optional: false },
        { holiday_name: "Independência do Brasil", day: 7, month: 9, optional: false },
        { holiday_name: "Nossa Senhora Aparecida", day: 12, month: 10, optional: false },
        { holiday_name: "Finados", day: 2, month: 11, optional: false },
        { holiday_name: "Proclamação da República", day: 15, month: 11, optional: false },
        { holiday_name: "Dia da Consciência Negra", day: 20, month: 11, optional: false },
        { holiday_name: "Natal", day: 25, month: 12, optional: false },
        { holiday_name: "Adesão do Maranhão à Independência do Brasil", day: 28, month: 7, optional: false },
        { holiday_name: "Dia de São Pedro (São Luís)", day: 29, month: 6, optional: false },
        { holiday_name: "Natividade de Nossa Senhora/Aniversário de São Luís (Fundação da cidade)", day: 8, month: 9, optional: false },
        { holiday_name: "Nossa Senhora da Conceição (São Luís)", day: 8, month: 12, optional: false },
    ]);
}
;
//# sourceMappingURL=insert-slz-holidays.js.map