import mongoose from "mongoose";

const questionSchema = mongoose.Schema({
    addedBy: {
        _id: String,
        email: String,
        isAdmin: Boolean,
        userName: String,
    },
    addedAt: {
        type: Date,
        default: new Date().getTime(),
    },
    source: {
        class: { type: String },
        subject: { type: String },
        chapter: { type: String },
        topic: { type: String },
        type: { type: String },
    },
    question: String,
    answer: String,
    imageLink: String,
});

const question = mongoose.model("Question", questionSchema);

export default question;
