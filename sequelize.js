require("dotenv").config({});

const { Sequelize } = require("sequelize");

const { DB_HOST, DB_USER, DB_NAME, DB_PASSWORD } = process.env;

const sequelize = new Sequelize(DB_NAME, DB_USER, DB_PASSWORD, {
  host: DB_HOST,
  dialect: "mysql",
});

module.exports = sequelize;

(async () => {
  try {
    await sequelize.authenticate();
    console.log("Соединение с БД успешно установлено");
  } catch (error) {
    console.error("Ошибка: ", error);
  }
})();
