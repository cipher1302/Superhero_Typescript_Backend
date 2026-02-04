import express from 'express'
import { initialDatabase } from './db/sequelize/sequelizer.ts'
import { getEnvVar } from './utils/getEnvVar.ts'
import { Superhero } from './db/models/SuperHeroModel.ts'


const PORT = Number(getEnvVar('PORT',"3000"))
const app = express()


async function startServer () : Promise<void>{
    try {
        await initialDatabase()
        console.log("✅ Database successfully initialized");
    } catch (err) {
        console.error(
        "❌ Failed to start the server: Database initialization error.",
        err
      );
    }
}

app.listen(PORT,()=>{
    console.log(`Server is running on port ${PORT}`);
})

startServer()
