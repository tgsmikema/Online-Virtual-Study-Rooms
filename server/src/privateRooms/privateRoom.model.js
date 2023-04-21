const {Schema, model} = require("mongoose")

const PrivateRoomSchema = new Schema({
  ownerId: {
    required: true,
    type: String,
    unique: true
  },
  users: {
    required: true,
    type: [String],
    default: []
  },
  backgroundUrl: {
    required: true,
    type: String
  },
  isVisibleToFriends:{
    required: true,
    type: Boolean,
    default: false
  }
})

const PrivateRoom = model("privateRoom", PrivateRoomSchema)

module.exports = PrivateRoom
