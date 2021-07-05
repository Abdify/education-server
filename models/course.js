import mongoose from "mongoose";

const courseSchema = mongoose.Schema({
    courseUrl: String,
    courseBy: {},
    courseTitle: String,
    courseDescription: String,
    courseImage: String,
    courseTags: [String],
    courseImage: String,
    likes: {
        type: [String],
        default: [],
    },
    createdAt: {
        type: Date,
        default: new Date(),
    },
});

const course = mongoose.model("Course", courseSchema);

export default course;
