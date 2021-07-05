import mongoose from "mongoose";

const subjectSchema = mongoose.Schema({
    addedAt: {
        type: Date,
        default: new Date().getTime(),
    },
    name: String,
    subjectId: String,
    class: String,
    numberOfChapters: { type: Number, default: 0 },
});

const subject = mongoose.model("Subject", subjectSchema);

export default subject;
