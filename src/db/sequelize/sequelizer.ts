import { baseConfig } from "./baseConfig.ts";
import { Sequelize } from "sequelize";


const backupServer = new Sequelize({
    ...baseConfig,
    database:'postgres'
})

const sequelize = new Sequelize({
    ...baseConfig
})


export async function initialDatabase(){
    try {
        await backupServer.authenticate()
        console.log("✅ Connection to database server successful.");
        await backupServer.query(`CREATE DATABASE "${baseConfig.database}"`)
        .catch(err => {
            if (err.original?.code === '42P04') { 
            console.log(`✅ Database '${baseConfig.database}' already exists.`);
            } else {
            throw err; 
            }
        });

        await sequelize.authenticate()
        console.log("✅ Connection to application database successful.");
        await sequelize.sync({alter:true})
        console.log("✅ Tables synchronized successfully.");
        console.log("✅ Tables synchronized successfully. Models:", Object.keys(sequelize.models));
    } catch (err) {
        console.log("❌ Database initialization error:", err);
        throw err; 
    }
}
