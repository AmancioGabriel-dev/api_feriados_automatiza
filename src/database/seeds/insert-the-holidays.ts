import { Knex } from "knex";

export async function seed(knex: Knex): Promise<void> {
    // Deletes ALL existing entries
    await knex("holidays_the").del();

    // Inserts seed entries
    await knex("holidays_the").insert([
        { holiday_name: "Confraternização Universal", day : 1, month: 1, optional: false },

        { holiday_name: "Carnaval (segunda-feira)", day: 3, month: 3, optional: true },
        { holiday_name: "Carnaval (terça-feira)",  day: 4, month: 3, optional: true },

        { holiday_name: "Sexta-feira Santa (Paixão de Cristo)", day: 18, month: 4, optional: false },
        { holiday_name: "Tiradentes",                          day: 21, month: 4, optional: false },

        { holiday_name: "Dia do Trabalhador", day: 1, month: 5, optional: false },

        { holiday_name: "Corpus Christi", day: 19, month: 6, optional: true },

        { holiday_name: "Aniversário de Teresina", day: 16, month: 8, optional: false },

        { holiday_name: "Independência do Brasil", day: 7,  month: 9,  optional: false },

        { holiday_name: "Nossa Senhora Aparecida",     day: 12, month: 10, optional: false },
        { holiday_name: "Dia do Piauí",                day: 19, month: 10, optional: false },

        { holiday_name: "Finados",                     day: 2,  month: 11, optional: false },
        { holiday_name: "Proclamação da República",    day: 15, month: 11, optional: false },
        { holiday_name: "Dia da Consciência Negra",    day: 20, month: 11, optional: false },

        { holiday_name: "Nossa Senhora da Conceição",  day: 8,  month: 12, optional: false },
        { holiday_name: "Natal",                       day: 25, month: 12, optional: false }
    ]
    );
};
