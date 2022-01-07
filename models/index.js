const Blog = require('./blog');
const Food = require('./food');
const Packing = require('./packing');
const Trip = require('./trip');
const User = require('./user');


User.belongsToMany(Trip, {
    // Define the third table needed to store the foreign keys
    through: {
        model: Trip,
        unique: false
    },
    // Define an alias for when data is retrieved
    as: 'planned_trips'
});

Trip.belongsToMany(User, {
  // Define the third table needed to store the foreign keys
  through: {
      model: Trip,
      unique: false
  },
  // Define an alias for when data is retrieved
  as: 'users_trips'
});

User.hasMany(Blog,{
  foreignKey:"user_id"

})
Blog.belongsTo(User,{
    foreignKey:"user_id",
    onDelete: "CASCADE"
})

User.hasMany(Trip,{
  foreignKey:"user_id"

})
// Trip.belongsTo(User,{
//     foreignKey:"user_id",
//     onDelete: "CASCADE"
// })

module.exports = { Blog, Food, Packing, Trip, User };