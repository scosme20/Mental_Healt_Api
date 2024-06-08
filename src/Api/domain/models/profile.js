import { DataTypes } from "sequelize";
import sequelize from "../../../../config/db";
import User from "./user";

const Profile = sequelize.define('profile', {
    id: {
        type: DataTypes.INTEGER
    }
})