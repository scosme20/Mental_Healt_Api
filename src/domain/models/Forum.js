import { DataTypes } from "sequelize";
import User from './User.js'
import sequelize from "../../../config/database.js";

const Forum = sequelize.define('Forum', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },
    idUsuario: {
        type: DataTypes.INTEGER,
        references: {
            model: User,
            key: 'id',
        },
        allowNull: false,
    },
    titulo: {
        type: DataTypes.STRING,
        allowNull: false
    },
    conteudo: {
        type: DataTypes.TEXT,
        allowNull: false,
    },
}, {
    timestamps: true,
    createdAt: 'criadoEm',
    updatedAt: 'atualizadoEm'
})

User.hasMany(Forum, { foreignKey: 'idUsuario' });
Forum.belongsTo(User, { foreignKey: 'idUsuario' });

export default Forum;