const { Schema, model, Types } = require('mongoose');

//Date format file from module 18 to format dates
const dateFormat = require('../utils/dateFormat');

//Reaction schema as a subdocument to the Thought schema
const reactionSchema = new Schema(
    {
      // set custom id to avoid confusion with parent comment's _id field
      reactionId: {
        type: Schema.Types.ObjectId,
        default: () => new Types.ObjectId()
      },
      reactionBody: {
        type: String
      },
      username: {
        type: String
      },
      createdAt: {
        type: Date,
        default: Date.now,
        get: createdAtVal => dateFormat(createdAtVal)      }
    },
    {
      toJSON: {
        getters: true
      },
      id: false
    }
  );


const ThoughtSchema = new Schema(
    {
      thoughtText: {
        type: String
      },
      createdAt: {
        type: Date,
        default: Date.now,
        get: createdAtVal => dateFormat(createdAtVal) },
        reactions: [reactionSchema],

        username: {
            type: String
        },
    },

    {
      toJSON: {
        virtuals: true,
        getters: true
      },
      id: false
    }
  );


  //Virtual to get reaction count
  ThoughtSchema.virtual('reactionCount').get(function() {
    return this.reactions.length;
  });

  
const Thought = model('Thought', ThoughtSchema);

module.exports = Thought;