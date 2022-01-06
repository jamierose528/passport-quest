const{seedBlog, seedTrip, seedUser} = require('./seeds');
const sequelize = require('../config/connection');

const seedAll = async() =>{
    await sequelize.sync({ force: true });
    console.log("-------------------")
    await seedBlog()
    console.log("-------------------")
    await seedTrip()
    console.log("-------------------")
    await seedUser()
    console.log("-------------------")
    process.exit(0);
}

seedAll();