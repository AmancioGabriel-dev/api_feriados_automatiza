import { knex as createKnexInstance } from "knex"
import config from "../../knexfile"

export const knex = createKnexInstance(config as any)