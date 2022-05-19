const { Schema, model, Types } = require('mongoose');


// const reactionSchema = new Schema(
//     {
//       // set custom id to avoid confusion with parent comment's _id field
//       reactionId: {
//         type: Schema.Types.ObjectId,
//         default: () => new Types.ObjectId()
//       },
//       reactionBody: {
//         type: String
//       },
//       username: {
//         type: String
//       },
//       createdAt: {
//         type: Date,
//         default: Date.now      }
//     },
//     {
//       toJSON: {
//         getters: true
//       },
//       id: false
//     }
//   );


const ThoughtSchema = new Schema(
    {
      thoughtText: {
        type: String
      },
      createdAt: {
        type: Date,
        default: Date.now },
      //  reactions: [reactionSchema],

        username: {
            type: String
        },
    },

    {
      toJSON: {
        virtuals: true
      },
      id: false
    }
  );

  // ThoughtSchema.virtual('reactionCount').get(function() {
  //   return this.reactions.length;
  // });

  
const Thought = model('Thought', ThoughtSchema);

module.exports = Thought;