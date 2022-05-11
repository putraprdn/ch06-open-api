"use strict";
module.exports = {
	async up(queryInterface, Sequelize) {
		await queryInterface.createTable("cars", {
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
			is_active: {
				type: Sequelize.BOOLEAN,
			},
			size_id: {
				type: Sequelize.INTEGER,
				references: {
					model: "car_sizes",
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
		await queryInterface.dropTable("cars");
	},
};
