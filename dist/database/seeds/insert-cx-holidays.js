"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.seed = seed;
async function seed(knex) {
    // Deletes ALL existing entries
    await knex("holidays_cx").del();
    // Inserts seed entries
    await knex("holidays_cx").insert([
        { holiday_name: "Confraternização Universal", day: 1, month: 1, optional: false },
        { holiday_name: "Carnaval (segunda-feira)", day: 3, month: 3, optional: true },
        { holiday_name: "Carnaval (terça-feira)", day: 4, month: 3, optional: true },
        { holiday_name: "Sexta-feira Santa (Paixão de Cristo)", day: 18, month: 4, optional: false },
        { holiday_name: "Tiradentes", day: 21, month: 4, optional: false },
        { holiday_name: "Dia do Trabalhador", day: 1, month: 5, optional: false },
        { holiday_name: "Corpus Christi", day: 19, month: 6, optional: true },
        { holiday_name: "São Pedro e São Paulo (Caxias)", day: 29, month: 6, optional: false },
        { holiday_name: "Adesão do Maranhão à Independência (Data Magna - Estadual)", day: 28, month: 7, optional: false },
        { holiday_name: "Adesão de Caxias à Independência do Brasil (Municipal)", day: 1, month: 8, optional: false },
        { holiday_name: "Independência do Brasil", day: 7, month: 9, optional: false },
        { holiday_name: "São Francisco de Assis (Caxias)", day: 4, month: 10, optional: false },
        { holiday_name: "Nossa Senhora Aparecida", day: 12, month: 10, optional: false },
        { holiday_name: "Dia do Trabalhador", day: 15, month: 10, optional: true },
        { holiday_name: "Dia do Servidor Público", day: 28, month: 10, optional: true },
        { holiday_name: "Finados", day: 2, month: 11, optional: false },
        { holiday_name: "Proclamação da República", day: 15, month: 11, optional: false },
        { holiday_name: "Dia da Consciência Negra", day: 20, month: 11, optional: false },
        { holiday_name: "Nossa Senhora da Conceição (Padroeira de Caxias)", day: 8, month: 12, optional: false },
        { holiday_name: "Natal", day: 25, month: 12, optional: false }
    ]);
}
;
//# sourceMappingURL=insert-cx-holidays.js.map