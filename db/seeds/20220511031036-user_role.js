"use strict";

module.exports = {
	async up(queryInterface, Sequelize) {
		return queryInterface.bulkInsert("user_roles", [
			{
				id: 1,
				name: "Super Admin",
				createdAt: new Date(),
				updatedAt: new Date(),
			},
			{
				id: 2,
				name: "Admin",
				createdAt: new Date(),
				updatedAt: new Date(),
			},
			{
				id: 3,
				name: "Member",
				createdAt: new Date(),
				updatedAt: new Date(),
			},
		]);
	},

	async down(queryInterface, Sequelize) {
		/**
		 * Add commands to revert seed here.
		 *
		 * Example:
		 * await queryInterface.bulkDelete('People', null, {});
		 */
	},
};
