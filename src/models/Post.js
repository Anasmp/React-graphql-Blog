import mongoose, { Schema } from 'mongoose';

const PostSchema = new Schema({
  text: {
    type:String
  }
},{ timestamps: true });

export default mongoose.model('Post', PostSchema);
