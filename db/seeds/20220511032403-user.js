"use strict";

module.exports = {
	async up(queryInterface, Sequelize) {
		return queryInterface.bulkInsert("users", [
			{
				id: 99999,
				role_id: 1,
				name: "Super Admin",
				username: "superadmin",
				email: "superadmin@crm.com",
				password:
					"$2b$12$kZVEHxo7DFAsZPmg1xaNnOsKcF2aInJoHDV9AtRVIgI913dScfppq", // 123456
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
