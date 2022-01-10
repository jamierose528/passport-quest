const Blog = require('./blog');
const Trip = require('./trip');
const User = require('./user');


User.hasMany(Trip, {
    // Define an alias for when data is retrieved
    foreignKey: 'user_id'
});

Trip.belongsTo(User, {
  // Define an alias for when data is retrieved
  foreignKey: 'user_id',
  onDelete: "CASCADE"
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

module.exports = { Blog, Trip, User };