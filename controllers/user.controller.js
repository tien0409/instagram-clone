const {validationResult} = require ("express-validator");
const asyncHandler = require ("express-async-handler");

const generateToken = require ("../utils/generate-token");
const User = require ("../models/user.model");
const Post = require ("../models/post.model");
const Message = require ("../models/message.model");

/*
 * @desc  sign up user
 * @route POST /api/user/signup
 * @access Public
 */
const signUp = asyncHandler (async (req, res) => {
  const errors = validationResult (req);
  if (!errors.isEmpty ()) {
    res.status (400);
    throw new Error (errors.array ()[0].msg);
  }
  const {email, username, fullName, password} = req.body;

  const newUser = new User ({email, username, fullName, password});
  await newUser.save ();

  res.status (201).json ({
    _id: newUser._id,
    email: newUser.email,
    username: newUser.username,
    fullName: newUser.fullName,
    followers: newUser.followers,
    following: newUser.following,
    avatar: newUser.avatar,
    phoneNumber: newUser.phoneNumber,
    gender: newUser.gender,
    token: generateToken (newUser._id),
  });
});

/*
 * @desc  sign in user
 * @route POST /api/user/signin
 * @access Public
 */
const signIn = asyncHandler (async (req, res) => {
  const errors = validationResult (req);
  if (!errors.isEmpty ()) {
    res.status (400);
    throw new Error (errors.array ()[0].msg);
  }

  const {email, password} = req.body;

  const user = await User.findOne ({email});

  if (user && (await user.isCorrectPassword (password))) {
    res.status (200).json ({
      _id: user._id,
      email: user.email,
      username: user.username,
      avatar: user.avatar,
      fullName: user.fullName,
      followers: user.followers,
      following: user.following,
      phoneNumber: user.phoneNumber,
      gender: user.gender,
      token: generateToken (user._id),
    });
  } else {
    res.status (401);
    throw new Error ("Email or Password incorrect. Please try again");
  }
});

/*
 * @desc  sign in user with fb
 * @route POST /api/user/signin/fb
 * @access Public
 */
const signInWithFb = asyncHandler (async (req, res) => {
  const {user} = req;
  res.status (200).json ({
    _id: user._id,
    email: user.email,
    username: user.username,
    avatar: user.avatar,
    fullName: user.fullName,
    followers: user.followers,
    following: user.following,
    phoneNumber: user.phoneNumber,
    gender: user.gender,
    token: generateToken (user._id),
  });
});

/*
 * @desc  check auth
 * @route POST /api/user/auth
 * @access Public
 */
const authSignIn = asyncHandler (async (req, res) => {
  res.status (200).json ({
    _id: req.user._id,
    email: req.user.email,
    username: req.user.username,
    avatar: req.user.avatar,
    fullName: req.user.fullName,
    followers: req.user.followers,
    following: req.user.following,
    phoneNumber: req.user.phoneNumber,
    gender: req.user.gender,
  });
});

/*
 * @desc  get all user suggestion
 * @route GET /api/user/suggestion
 * @access Private
 */
const getUserSuggestion = asyncHandler (async (req, res) => {
  const {_id: idLoggedIn, following} = req.user;

  const users = await User.find ({
    _id: {$ne: idLoggedIn, $nin: following},
  }).select ("-password");

  res.status (200).json (users);
});

/*
 * @desc  get info user details
 * @route GET /api/user/:username
 * @access Private
 */
const getUserDetails = asyncHandler (async (req, res) => {
  const {userReq} = req;

  const user = await User.findById (userReq._id)
    .populate ("followers", "username avatar fullName")
    .populate ("following", "username avatar fullName");
  const postsCreated = await Post.find ({user: userReq._id});

  res.status (200).json ({
    _id: user._id,
    email: user.email,
    username: user.username,
    avatar: user.avatar,
    fullName: user.fullName,
    followers: user.followers,
    following: user.following,
    postsCreated: postsCreated.length,
    phoneNumber: user.phoneNumber,
    gender: user.gender,
  });
});

/*
 * @desc  follow user
 * @route POST /api/user/follow
 * @access Private
 */
const followUser = asyncHandler (async (req, res) => {
  const {following, id: idLoggedIn} = req.user;
  const {username} = req.body;

  const user = await User.findOne ({username});

  if (!user) {
    res.status (404);
    throw new Error ("Can not follow. User not found");
  }

  // user logged in following
  if (following.includes (user._id)) {
    await User.updateOne (
      {_id: idLoggedIn},
      {$pull: {following: user._id}},
    );
  } else {
    await User.updateOne (
      {_id: idLoggedIn},
      {$push: {following: user._id}},
    );
  }

  // user followed
  if (user.followers.includes (idLoggedIn)) {
    await User.updateOne (
      {_id: user._id},
      {$pull: {followers: idLoggedIn}},
    );
  } else {
    await User.updateOne (
      {_id: user._id},
      {$push: {followers: idLoggedIn}},
    );
  }

  await user.save ();
  await req.user.save ();

  res.status (200).json ({msg: "Follow success"});
});

/*
 * @desc  user comment post
 * @route POST /api/user/comment/:postId
 * @access Private
 */
const commentPost = asyncHandler (async (req, res) => {
  const {postReq, user} = req;
  const {content} = req.body;

  const comment = {
    user: user._id,
    name: user.username,
    avatar: user.avatar,
    content,
  };

  await Post.updateOne ({_id: postReq._id}, {$push: {comments: comment}});

  res.status (200).json ({msg: "Comment success"});
});

/*
 * @desc  update avatar user and all post user created
 * @route PUT /api/user/avatar
 * @access Private
 */
const updateAvatar = asyncHandler (async (req, res) => {
  const {user} = req;
  const {avatar} = req.body;

  await User.updateOne ({_id: user._id}, {avatar});
  await Post.updateMany ({user: user._id}, {avatar});
  await Message.updateMany ({sender: user._id}, {avatar});

  res.status (200).json ({msg: "Update avatar success"});
});

/*
 * @desc  delete avatar => update avatar to default
 * @route DELETE /api/user/avatar
 * @access Private
 */
const deleteAvatar = asyncHandler (async (req, res) => {
  const {user} = req;

  await User.updateOne (
    {_id: user._id},
    {avatar: "/images/avatar_default.png"},
  );
  await Post.updateMany (
    {user: user._id},
    {avatar: "/images/avatar_default.png"},
  );
  await Message.updateMany (
    {sender: user._id},
    {avatar: "/images/avatar_default.png"},
  );

  res.status (200).json ({msg: "Remove avatar success"});
});

/*
 * @desc  update info
 * @route PUT /api/user
 * @access Private
 */
const updateInfo = asyncHandler (async (req, res) => {
  const errors = validationResult (req);
  if (!errors.isEmpty ()) {
    res.status (400);
    throw new Error (errors.array ()[0].msg);
  }

  const {user} = req;
  const {fullName, username, email, gender, phoneNumber} = req.body;

  await User.updateOne (
    {_id: user._id},
    {fullName, username, email, gender, phoneNumber},
  );
  await Post.updateMany (
    {user: user._id},
    {name: username, comment: {name: username}},
  );

  res.status (200).json ({msg: "Update info success"});
});

/*
 * @desc  update password
 * @route PUT /api/user/password
 * @access Private
 */
const updatePassword = asyncHandler (async (req, res) => {
  const errors = validationResult (req);
  if (!errors.isEmpty ()) {
    res.status (400);
    throw new Error (errors.array ()[0].msg);
  }

  const {user} = req;
  const {password} = req.body;

  await User.updateOne ({_id: user._id}, {password});

  res.status (200).json ({msg: "Update password success"});
});

/*
 * @desc  find user
 * @route GET /api/user?keyword
 * @access Private
 */
const findUser = asyncHandler (async (req, res) => {
  const {keyword} = req.query;

  if (keyword.trim () === "") {
    return res.status (200).json ([]);
  }

  const users = await User.find ({
    username: new RegExp (`${keyword}`, "gi"),
    _id: {$ne: req.user._id},
  }).select ("-password");

  res.status (200).json (users);
});

module.exports = {
  signUp,
  signIn,
  authSignIn,
  getUserSuggestion,
  getUserDetails,
  followUser,
  commentPost,
  updateAvatar,
  deleteAvatar,
  updateInfo,
  updatePassword,
  findUser,
  signInWithFb
};
