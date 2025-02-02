import Knex from "knex";
import Bookshelf from "bookshelf";
import knexConfig from "../knexfile";

const knexInstance = Knex(knexConfig.development);
const bookshelfInstance = Bookshelf(knexInstance);

export { knexInstance, bookshelfInstance };
