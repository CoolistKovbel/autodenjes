import mongoose from "mongoose";

const User = mongoose.Schema({
  username: { type: 'string'},
  email: { type: 'string'},
  userAccount: { type: 'string'},
})

