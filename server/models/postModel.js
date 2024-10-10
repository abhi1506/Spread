import mongoose from 'mongoose';
const { Schema, model } = mongoose;
// Option Schema for Polls
const optionSchema = new Schema({
  option: {
    type: String,
    required: true, 
  },
  votes: {
    type: Number,
    default: 0, 
  },
});

const durationSchema = new Schema({
  days: {
    type: Number,
    required: true, 
  },
  hours: {
    type: Number,
    required: true, 
  },
  minutes: {
    type: Number,
    required: true, 
  },
});

// Poll Schema
const pollSchema = new Schema({
  question: {
    type: String,
    required: true, 
  },
  options: {
    type: [optionSchema],
    required: true, 
  },
  duration: {
    type: durationSchema,
    required: true,
  },
});

// Reply Schema for Comments
const replySchema = new Schema({
  postedBy: {
    type: Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  avatar: String,
  name: {
    type: String,
    required: true
  },
  reply: {
    type: String,
    required: true
  },
  likes: [{
    type: Schema.Types.ObjectId,
    ref: "User"
  }],
  dislikes: [{
    type: Schema.Types.ObjectId,
    ref: "User"
  }]
}, {
  timestamps: true
});

// Comment Schema
const commentSchema = new Schema({
  postedBy: {
    type: Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  avatar: String,
  name: {
    type: String,
    required: true
  },
  comment: {
    type: String,
    required: true
  },
  likes: [{
    type: Schema.Types.ObjectId,
    ref: "User"
  }],
  dislikes: [{
    type: Schema.Types.ObjectId,
    ref: "User"
  }],
  replies: [replySchema] 
}, {
  timestamps: true
});

// Post Schema
const postSchema = new Schema({
  content: {
    type: String,
    trim: true,
    required: true
  },
  postedBy: {
    type: Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  author: {
    avatar: String,
    name: {
      type: String,
      required: true
    },
    username: {
      type: String,
      required: true
    },
    email: {
      type: String,
      required: true
    }
  },
  images: [{
    public_id: {
      type: String,
      default: ""
    },
    url: {
      type: String,
      default: ""
    }
  }],
  videos: [{
    public_id: {
      type: String,
      default: ""
    },
    url: {
      type: String,
      default: ""
    }
  }],
  audio: {
    public_id: {
      type: String,
      default: ""
    },
    url: {
      type: String,
      default: ""
    }
  },
  gif: {
    type: String
  },
  location: String,
  poll: pollSchema,
  likes: [{
    type: Schema.Types.ObjectId,
    ref: 'User'
  }],
  comments: [commentSchema],
  isRepost: {
    type: Boolean,
    default: false
  },
  originalPost: {
    type: Schema.Types.ObjectId,
    ref: 'Post',
    default: null
  },
  repostCount: {
    type: Number,
    default: 0
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
}, {
  timestamps: true
});

const Post = model('Post', postSchema);

export default Post;