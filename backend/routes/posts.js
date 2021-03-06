const express = require("express");
const router = express.Router();

const { getPostsByUsers } = require("../helpers/dataHelpers");

module.exports = ({ getPosts, addPost, getUsersPosts }) => {
  router.get("/", (req, res) => {
    getPosts()
      .then((posts) => res.json(posts))
      .catch((err) =>
        res.json({
          error: err.message,
        })
      );
  });

  router.get("/posts", (req, res) => {
    getUsersPosts()
      .then((usersPosts) => {
        const formattedPosts = getPostsByUsers(usersPosts);
        res.json(formattedPosts);
      })
      .catch((err) =>
        res.json({
          error: err.message,
        })
      );
  });

  router.post("/", (req, res) => {
    const {
      category,
      title,
      organization,
      positions_available,
      description,
      thumbnail_photo_url,
      street,
      city,
      province,
      post_code,
      date_posted,
      start_date,
      requirements,
      additional_info,
      user_id,
    } = req.body;

    console.log("req.body is ", req.body);
    addPost(
      category,
      title,
      organization,
      positions_available,
      description,
      thumbnail_photo_url,
      street,
      city,
      province,
      post_code,
      date_posted,
      start_date,
      requirements,
      additional_info,
      user_id
    )
      .then((newPost) => res.json(newPost))
      .catch((err) =>
        res.json({
          error: err.message,
        })
      );
  });
  return router;
};
