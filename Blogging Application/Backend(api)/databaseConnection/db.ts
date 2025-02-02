const knex = require("knex")({
  client: "mysql",
  connection: {
    host: "127.0.0.1",
    user: "root",
    password: "Kritim@123",
    database: "blog",
    charset: "utf8",
  },
});
