const { Schema, model } = require('mongoose');


const UserSchema = new Schema(
    {
      username: {
        type: String
      },
      email: {
        type: String
      },
      friends: [],
    },
    {
      toJSON: {
        virtuals: true,
        getters: true
      },
      id: false
    }
  );

//   UserSchema.virtual('replyCount').get(function() {
//     return this.replies.length;
//   });
  
  const User = model('User', UserSchema);
  
  module.exports = User;