import { Sequelize } from "sequelize";

const sequelize = new Sequelize("mec_online_db", "postgres", "Assa@774623", {
  host: "localhost",
  port: 5432,
  dialect: "postgres",
  logging: false,
});

const connectDB = async () => {
  try {
    await sequelize.authenticate();
    console.log("Connection has been established successfully.");
  } catch (error) {
    console.error("Unable to connect to the database:", error);
  }
};

export { connectDB };
export default sequelize;
