import { DataTypes } from "sequelize";
import sequelize from "../../../../config/db";
import User from "./User";

const AppointMent = sequelize.define('Appointment', {
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
    idProfissional: {
        type: DataTypes.INTEGER,
        references: {
            model: User,
            key: 'id',
        },
        allowNull: false,
    },
    data: {
        type: DataTypes.DATE,
        allowNull: false,
    },
    detalhes: {
        type: DataTypes.TEXT
    },
}, {
    timestamps: true,
    createdAt: 'criadoEm',
    updatedAt:'atualizadoEm',
});

User.hasMany(AppointMent, { ForeingKey: 'idUsuario'})
User.hasMany(AppointMent, { ForeingKey: 'idProfissional' })
AppointMent.belongTo(User, { as: 'usuario', ForeingKey: 'idUsuario'})
AppointMent.belongTo(User, { as: 'profissional', ForeingKey: 'idProfissional'})

export default AppointMent;