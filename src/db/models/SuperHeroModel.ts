import {sequelize} from '../sequelize/sequelizer.ts'
import { DataTypes } from 'sequelize'
import type { ModelDefined } from 'sequelize/types/model';
import {baseModelConfig} from './BaseModel.ts'
import type {ISuperheroAttributes} from './modelSupport/SuperHeroInterfaces.ts'
import type { CreateSuperheroType } from './modelSupport/SuperHeroTypes.ts'

export const Superhero :ModelDefined<ISuperheroAttributes,CreateSuperheroType> = sequelize.define('Superhero',{
    ...baseModelConfig,
    nickname:{
        type:DataTypes.STRING,
        allowNull:false,
        validate:{
              len:[1,20]
        }
    },
    real_name:{
        type:DataTypes.STRING,
        allowNull:true,
        validate:{
              len:[1,20]
        }
    },
    origin_description:{
        type:DataTypes.TEXT,
        allowNull:true
    },
    superpowers:{
        type:DataTypes.TEXT,
        allowNull:false
    },
    catch_phrase:{
        type:DataTypes.STRING,
        allowNull:true,
        validate:{
            len:[2,30]
        }
    },
    images:{
        type: DataTypes.ARRAY(DataTypes.STRING),
        allowNull: true,
    }
},
{
    tableName:'superhero',
    timestamps:true,
    underscored:true
}
)