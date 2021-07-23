const asyncHandler = require ("express-async-handler");
const passport = require ("passport")
const JwtStrategy = require ("passport-jwt").Strategy;
const ExtractJwt = require ("passport-jwt").ExtractJwt;
const FacebookTokenStrategy = require ("passport-facebook-token")

const {FB_APP_ID, FB_APP_SECRET, JWT_SECRET} = require ("../configs/env");
const User = require ("../models/user.model")

const opts = {
  jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken (),
  secretOrKey: JWT_SECRET
}

passport.use (new JwtStrategy (opts, asyncHandler (async (payload, done) => {
  const user = await User.findById (payload.userId)
  if (!user) {
    const error = new Error ("User not found")
    return done (error, false)
  }
  return done (null, user);
})))

passport.use (new FacebookTokenStrategy ({
  clientID: FB_APP_ID,
  clientSecret: FB_APP_SECRET
}, asyncHandler (async (accessToken, refreshToken, profile, done) => {
  const user = await User.findOne ({authFbId: profile.id, authType: "facebook"});

  if (user) return done (null, user);

  // create new user
  let username = profile.displayName.trim ().split (/\s+/).join ("_").toLowerCase ();
  username = username.replace (/à|á|ạ|ả|ã|â|ầ|ấ|ậ|ẩ|ẫ|ă|ằ|ắ|ặ|ẳ|ẵ/g, 'a');
  username = username.replace (/è|é|ẹ|ẻ|ẽ|ê|ề|ế|ệ|ể|ễ/g, 'e');
  username = username.replace (/ì|í|ị|ỉ|ĩ/g, 'i');
  username = username.replace (/ò|ó|ọ|ỏ|õ|ô|ồ|ố|ộ|ổ|ỗ|ơ|ờ|ớ|ợ|ở|ỡ/g, 'o');
  username = username.replace (/ù|ú|ụ|ủ|ũ|ư|ừ|ứ|ự|ử|ữ/g, 'u');
  username = username.replace (/ỳ|ý|ỵ|ỷ|ỹ/g, 'y');
  username = username.replace (/đ/g, 'd');

  // find user name
  while (true) {
    const usernameExist = await User.findOne ({username});
    if (usernameExist) {
      username += `_${Math.random (100000)}`
    } else {
      break;
    }
  }

  const newUser = new User ({
    authFbId: profile.id,
    authType: "facebook",
    email: profile.emails[0].value,
    fullName: profile.displayName,
    avatar: profile.photos[0].value,
    username
  })
  await newUser.save ();
  done (null, newUser);
})));