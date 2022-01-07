const { setDefaultResultOrder } = require("dns");
const sequelize = require("../config/connection");
const { User, Trip, Blog } = require("../models");

const userData = [
  {
    username: "trailTrek",
    email: "trailtrek@email.com",
    password: "password",
  },
];

const tripData = [
  {
    user_id: 1,
    city: "Tokyo",
    startDay: "January 5th 2022",
    endDay: "January 15th 2022",
    budget: 5000,
    accommodation: "Wardorf Astorio",
    transportation: "bus",
    emergencyContactName: "Mom",
    emergencyContactPhone: "2131234567",
    notes: "allergic to nuts",
  },
];

const blogData = [
  {
    trip_id: 1,
    user_id: 1,
    title: "London",
    entry:
      "Today was great, ate a lot of good food, saw a lot of great sights.",
    photo: "urlfromcloudify",
    video: "urlfromcloudify",
  },
];

const seedBlog = async () => {
  await Blog.bulkCreate(blogData);
  console.log("Blog!");
};

const seedTrip = async () => {
  await Trip.bulkCreate(tripData);
};

const seedUser = async () => {
  await User.bulkCreate(userData);
};

module.exports = { seedBlog, seedUser, seedTrip };
