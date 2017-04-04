'use strict'
const express = require('express');
const router = express.Router();
const knex = require("../db/knex.js");

router.route("/")
    .get(function(req, res) {
        knex('users')
            .then(function(allUsers) {
                res.render("users/index", {
                    users: allUsers
                });
            })
    });

module.exports = router;
