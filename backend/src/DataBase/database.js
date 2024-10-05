import { Sequelize } from "sequelize"; 

const sequelize = new Sequelize({
	dialect: "sqlite",
	storage: "../src/DataBase/database-sqlite.db",
});

export default sequelize;