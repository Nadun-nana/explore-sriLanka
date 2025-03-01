import mongoose from 'mongoose';

const PostSchema = new mongoose.Schema({
    title: { type: String, required: true },
    body: { type: String, required: true },
    images: [String], // Store image URLs from S3
}, { timestamps: true });

const Post = mongoose.model('Post', PostSchema);

export default Post;
