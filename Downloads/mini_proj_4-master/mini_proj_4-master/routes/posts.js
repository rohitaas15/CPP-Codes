const express = require('express');
const router = express.Router();
//import the model you have to post to
const Post = require('../models/Post');

//we reove the posts after the slash cause everytime it comes here it runs

//GETS BACK ALL THE POSTS
router.get('/', async (req, res) => {
  //res.send('we are on posts');
  //now instead of the message we try to get the data instead
  try {
    //.find() is a method on mongoose
    const posts = await Post.find();
    res.json(posts);
  } catch (err) {
    res.json({ message: err });
  }
});

// router.get('/specific', (req, res) => {
//   res.send('specific post');
// });

//SUBMITS THE POSTS
router.post('/', async (req, res) => {
  //we create a new post with the model
  const post = new Post({
    title: req.body.title,
    description: req.body.description,
  });
  //now we save to our database by post.save
  try {
    const savedPost = await post.save();
    res.json(savedPost);
  } catch (err) {
    res.json({ message: err });
  }
});
//     .then((data) => {
//       res.json(data);
//     })
//     .catch((err) => {
//       res.json({
//         message: err,
//       });
//     });
// });
//the one above doesnt work with just req.body so we have to install body parser

//GET BACK A SPECIFIC POST
//anything after colon is post id and we can access using post Id
router.get('/:postId', async (req, res) => {
  //whenever u have to submit or get data, we use the model we created above
  try {
    const post = await Post.findById(req.params.postId);
    res.json(post);
  } catch (err) {
    res.json({ message: err });
  }
});

//DELETE A SPECIFIC POST
//add underscore before id as mongo generates that automatically
//we go from traditional to with async...cause it returns a promise
router.delete('/:postId', async (req, res) => {
  try {
    const removedPost = await Post.remove({ _id: req.params.postId });
    res.json(removedPost);
  } catch (err) {
    res.json({ message: err });
  }
});

//UPDATE A POST
router.patch('/:postId', async (req, res) => {
  try {
    const updatedPost = await Post.updateOne(
      {
        _id: req.params.postId,
      },
      { $set: { title: req.body.title } }
    );
    res.json(updatedPost);
  } catch (err) {
    res.json({ message: err });
  }
});

module.exports = router;
