const sequelize = require('../config/connection');
const  { Trip,  } = require("../models");

const tripData = [
    
    {
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
const seedTrip = async () => {
    await sequelize.sync({ force: true });
    Trip.bulkCreate(tripData);}


seedTrip();