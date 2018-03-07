'use strict';

const router = require('express').Router();
const { List } = require('../db/models');
module.exports = router;

// we want to be able to see all of the lists for a user
// and also see a single list and all of its items

// router.get('/', (req, res, next) => {
//     List.findAll()
//       .then(reviews => res.json(reviews))
//       .catch(next)
//   });

// router.post('/', (req, res, next) => {
//     let reviewData = req.body;
//     if (req.user) {
//         reviewData.userId = req.user.id
//     }
//     Review.create(reviewData)
//     .then(newReview => res.status(201).json(newReview))
//     .catch(next)
// });
