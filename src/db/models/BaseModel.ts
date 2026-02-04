import { DataTypes } from "sequelize";

export const baseModelConfig = {
    id:{
        type:DataTypes.UUID,
        defaultValue:DataTypes.UUIDV4,
        primaryKey:true
    }
}