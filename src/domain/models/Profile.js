import { DataTypes, ForeignKeyConstraintError } from "sequelize";
import sequelize from "../../../../config/db";
import User from "./User";
import { profile } from "winston";

const Profile = sequelize.define('Profile', {
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
    bio: {
        type: DataTypes.TEXT,
    },
},{
    timestamps: true,
    createdAt: 'criadoEm',
    updatedAt: 'atualizadoEm',
});

User.hasOne(profile, {ForeingKey: 'idUsuario'});
Profile.belongsTo(User, {ForeingKey: 'idUsuario'});

export default Profile