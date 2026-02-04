import dotenv from 'dotenv'

dotenv.config()

export const getEnvVar = (value : string,defaultValue? : string)=>{
    const basicValue = process.env[value]
    if (basicValue){
        return basicValue
    }
    if (defaultValue){
        return defaultValue
    }
    else{
        throw new Error(`The variable ${value} is not found in your .env file`)
    }

}