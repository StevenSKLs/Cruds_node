const { Sequelize } = require("sequelize");

const db = new Sequelize({
  database: "todos_v1",
  port: 5432,
  host: "localhost",
  username: "postgres",
  password: "node",
  dialect: "postgres",
});

module.exports = db;