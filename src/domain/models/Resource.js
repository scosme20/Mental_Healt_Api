import { DataTypes } from "sequelize";
import sequelize from '../../../config/database.js'

const Resource = sequelize.define('Resource', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },
    titulo: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    conteudo: {
        type: DataTypes.TEXT,
        allowNull: false,
    },
}, {
    timestamps: true,
    createdAt: 'criadoEm',
    upadatedAt: 'atualizadoEm',
});

export default Resource