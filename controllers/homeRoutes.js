const router = require("express").Router();
const { Blog, Food, Packing, Trip, User } = require("../models");
const withAuth = require("../utils/auth");

router.get("/", async(req, res) => {
    try {
        // const tripData = await Trip.findAll({
        //   include: [
        //     {
        //       model: User,
        //     },
        //   ],
        // });

        // const trips = tripData.map((trip) => trip.get({ plain: true }));
        // console.log(trips);
        // res.json(trips)
        res.render("login", {
            //   trips,
            //   logged_in: req.session.logged_in
        });
    } catch (err) {
        // res.status(500).json(err);
        res.json("We've got an issue!");
    }
});

router.get("/trip/:id", async(req, res) => {
    try {
        const tripData = await Trip.findByPk(req.params.id, {
            include: [{
                model: Trip,
            }, ],
        });

        const trip = tripData.get({ plain: true });

        res.render("trip", {
            ...trip,
            logged_in: req.session.logged_in,
        });
    } catch (err) {
        res.status(500).json(err);
    }
});
///////////////////////////////////////////////////////////////////////////////////////////

// Use withAuth middleware to prevent access to route
router.get("/trip", withAuth, async(req, res) => {
    try {
        // Find the logged in user based on the session ID
        const userData = await User.findByPk(req.session.user_id, {
            attributes: { exclude: ["password"] },
            include: [{ model: Trip }],
        });

        const user = userData.get({ plain: true });

        res.render("trip", {
            ...user,
            logged_in: true,
        });
    } catch (err) {
        res.status(500).json(err);
    }
});

router.get("/login", (req, res) => {
    // If the user is already logged in, redirect the request to another route
    if (req.session.logged_in) {
        res.redirect("/profile");
        return;
    }

    res.render("login");
});

router.get("/addblog/:trip_id", async(req, res) => {
    try {
        const tripId = req.params.trip_id
        res.render("addblog", {

            tripId,
            logged_in: req.session.logged_in,
        });
    } catch (err) {
        res.status(500).json(err);
    }
});
module.exports = router;