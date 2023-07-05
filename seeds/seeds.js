const sequelize = require("../config/connection");
const seedUsers = require("./user-seeds");
const seedPosts = require("./post-seeds");
const seedComments = require("./comment-seeds");

const seedDatabase = async () => {
  try {
    await sequelize.sync({ force: true });

    await seedUsers();
    await seedPosts();
    await seedComments();

    console.log("Database seeded successfully!");
  } catch (err) {
    console.error("Error seeding database:", err);
  } finally {
    sequelize.close();
  }
};

seedDatabase();
