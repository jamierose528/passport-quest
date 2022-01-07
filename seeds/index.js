const{seedBlog, seedTrip, seedUser} = require('./seeds');
const sequelize = require('../config/connection');

const seedAll = async() =>{
    await sequelize.sync({ force: true });
    console.log("-------------------")
    await seedUser()
    console.log("-------------------")
    await seedTrip()
    console.log("-------------------")
    await seedBlog()
    console.log("-------------------")
    process.exit(0);
}

seedAll();