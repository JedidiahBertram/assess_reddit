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
    })

    .post(function(req, res) {
        knex('users')
            .insert(req.body.user)
            .returning("id")
            .then(function(id) {
                res.redirect(`/users/${id}`)
            })
            .catch(function(err) {
                console.log(err);
            });
    })

router.route('/edit')
    .get(function(req, res) {
        res.render('users/edit');
    });

router.route("/new")
    .get(function(req, res) {
        res.render('users/new');
    });

router.route('/delete')
    .get(function(req, res) {
        res.render('users/delete');
    });

router.route('/:user_id')
    .get(function(req, res) {
        knex('users')
            .where('id', req.params.user_id)
            .then(function(user) {
                res.render('users/show', {
                    full_name: user[0].full_name,
                    username: user[0].username
                });
            })
    })

    .put(function(req, res) {
        knex("users")
            .where('id', req.body.user.id)
            .update(req.body.user)
            .then(function() {
                res.redirect("/users")
            })
    })

    .delete(function(req, res) {
        console.log(req.body.user.id);
        knex("users")
            .where('id', req.body.user.id)
            .del()
            .then(function() {
                res.redirect("/users")
            });
    });
module.exports = router;
