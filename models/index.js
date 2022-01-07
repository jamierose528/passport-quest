const Blog = require('./blog');
const Food = require('./food');
const Packing = require('./packing');
const Trip = require('./trip');
const User = require('./user');

User.hasMany(Trip, {
    // Define the third table needed to store the foreign keys
    through: {
        model: Trip,
        unique: false
    },
    // Define an alias for when data is retrieved
    as: 'planned_trips'
});

Location.belongsToMany(Traveller, {
    // Define the third table needed to store the foreign keys
    through: {
        model: Trip,
        unique: false
    },
    // Define an alias for when data is retrieved
    as: 'location_travellers'
});

module.exports = { Blog, Food, Packing, Trip, User };