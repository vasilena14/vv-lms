import mongoose from 'mongoose';

const courseSchema = mongoose.Schema({
    title: String,
    description: String,
    name: String,
    creator: String,
    tags: [String],
    selectedFile: String,
    likes: {
        type: [String],
        default: [],
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