'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Appointments', {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      userId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'Users', 
          key: 'id'
        },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE'
      },
      professionalId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'Users', 
          key: 'id'
        },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE'
      },
      date: {
        type: Sequelize.DATE,
        allowNull: false
      },
      details: {
        type: Sequelize.TEXT
      },
      createdAt: {
        type: Sequelize.DATE,
        allowNull: false
      },
      updatedAt: {
        type: Sequelize.DATE,
        allowNull: false
      }
    });

 
    await queryInterface.addConstraint('Appointments', {
      fields: ['userId'], 
      type: 'foreign key',
      name: 'fk_appointment_user', 
      references: {
        table: 'Users', 
        field: 'id' 
      },
      onUpdate: 'CASCADE',
      onDelete: 'CASCADE'
    });

    await queryInterface.addConstraint('Appointments', {
      fields: ['professionalId'], 
      type: 'foreign key',
      name: 'fk_appointment_professional', 
      references: {
        table: 'Users', 
        field: 'id' 
      },
      onUpdate: 'CASCADE',
      onDelete: 'CASCADE'
    });
  },

  down: async (queryInterface, Sequelize) => {

    await queryInterface.removeConstraint('Appointments', 'fk_appointment_user');
    await queryInterface.removeConstraint('Appointments', 'fk_appointment_professional');


    await queryInterface.dropTable('Appointments');
  }
};
