"use strict";
module.exports = {
	async up(queryInterface, Sequelize) {
		await queryInterface.createTable("Cars", {
			id: {
				allowNull: false,
				autoIncrement: true,
				primaryKey: true,
				type: Sequelize.INTEGER,
			},
			name: {
				type: Sequelize.STRING,
			},
			description: {
				type: Sequelize.STRING,
			},
			price: {
				type: Sequelize.FLOAT,
			},
			image: {
				type: Sequelize.STRING,
			},
			isActive: {
				type: Sequelize.BOOLEAN,
			},
			sizeId: {
				type: Sequelize.INTEGER,
				allowNull: false,
				references: {
					model: "CarSizes",
					key: "id",
				},
				onUpdate: "CASCADE",
				onDelete: "CASCADE",
			},
			createdBy: {
				type: Sequelize.STRING,
			},
			updatedBy: {
				type: Sequelize.STRING,
			},
			deletedBy: {
				type: Sequelize.STRING,
			},
			deletedAt: {
				type: Sequelize.DATE,
			},
			createdAt: {
				allowNull: false,
				type: Sequelize.DATE,
			},
			updatedAt: {
				allowNull: false,
				type: Sequelize.DATE,
			},
		});
	},
	async down(queryInterface, Sequelize) {
		await queryInterface.dropTable("Cars");
	},
};
