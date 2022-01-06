const { setDefaultResultOrder } = require('dns');
const sequelize = require('../config/connection');
const  {User, Trip, Blog } = require("../models");

const userData = [
    
    {
        // id: "1",
        username: "trailTrek", 
        email: "trailtrek@email.com", 
        password: "password",
      
    }
]

const tripData = [
    
    {
        // id: "1",
        user_id: 1,
        city: "Tokyo",
        startDay: "January 5th 2022", 
        endDay: "January 15th 2022", 
        budget: 5000,
        accommodation: "Wardorf Astorio",
        transportation: "bus",
        emergencyContactName: "Mom",
        emergencyContactPhone: "2131234567",
        notes: "allergic to nuts"
    }
]

const blogData = [
    
    {
        // id: "1",
        trip_id: 1, 
        user_id: 1,
        title: "London",
        entry: "Today was great, ate a lot of good food, saw a lot of great sights.",
        photo: "urlfromcloudify",
        video: "urlfromcloudify",
    }
]

const seedBlog = () => {
        // await sequelize.sync({ force: true });
        Blog.bulkCreate(blogData);
        
    }
const seedTrip = () => {
        // await sequelize.sync({ force: true });
        Trip.bulkCreate(tripData);
    }
const seedUser = () => {
        // await sequelize.sync({ force: true });
        User.bulkCreate(userData);
        // process.exit(0);
    }




module.exports = {seedBlog, seedUser, seedTrip};