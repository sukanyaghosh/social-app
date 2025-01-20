import { DataTypes, Model } from "sequelize";
import sequelize from "../config/db";

export class Role extends Model {
  public declare role_id: number;
  public declare name: string;
  public declare created_at: Date;
  public declare updated_at: Date;
}

Role.init(
  {
    role_id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    sequelize,
    tableName: "roles",
    modelName: "Role",
    timestamps: true,
    createdAt: "created_at",
    updatedAt: "updated_at",
    underscored: true,
    hooks: {
      beforeCreate: (role) => {
        role.name = role.name.toLowerCase();
      },
      beforeUpdate: (role) => {
        role.name = role.name.toLowerCase();
      },
    },
  }
);
