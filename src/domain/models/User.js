import { DataTypes } from "sequelize";
import sequelize from "../../../config/db";

const User = sequelize.define('User', {
    id:{
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey:true,
    },
    nomeDeUsuario:{
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
    },
    senha: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    papel: {
        type: DataTypes.STRING,
        allowNull: false,
    },
},{
    timestamps: true,
    createdAt: 'criadoEm',
    updatedAt: 'AtualizadoEm',
});

export default User