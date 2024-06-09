import { DataTypes } from "sequelize";
import sequelize from "../../../config/database.js";
import User from "./User.js";

const Appointment = sequelize.define('Appointment', {
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

User.hasMany(Appointment, { foreignKey: 'idUsuario' });
User.hasMany(Appointment, { foreignKey: 'idProfissional' });
Appointment.belongsTo(User, { as: 'usuario', foreignKey: 'idUsuario' });
Appointment.belongsTo(User, { as: 'profissional', foreignKey: 'idProfissional' });

export default Appointment;
