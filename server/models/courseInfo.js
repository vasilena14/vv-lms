import mongoose from 'mongoose';

const courseSchema = mongoose.Schema({
    title: String,
    description: String,
    creator: String,
    tags: [String],
    selectedFile: String,
    likeCount: {
        type: Number,
        default: 0
    },
    isFavourite: {
        type: Boolean,
        default: false
    },
    createdAt: {
        type: Date,
        default: new Date()
    },
});

const CourseInfo = mongoose.model('CourseInfo', courseSchema);

export default CourseInfo;