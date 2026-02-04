import { getEnvVar } from "../../utils/getEnvVar.ts";
import type { Dialect } from "sequelize";

const dbName:string = getEnvVar("DB_NAME")
const dbUser:string = getEnvVar("DB_USER")
const dbHost:string = getEnvVar("DB_HOST")
const dbPassword:string = getEnvVar("DB_PASSWORD")
const dbDialect: Dialect = getEnvVar("DB_CONNECTION") as Dialect;
const dbPort:number = Number(getEnvVar("DB_PORT"))


export const baseConfig = {
    dialect:dbDialect,
    username:dbUser,
    port:dbPort,
    host:dbHost,
    password:dbPassword,
    database:dbName,
}