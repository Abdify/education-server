import mongoose from "mongoose";

const chapterSchema = mongoose.Schema({
    addedAt: {
        type: Date,
        default: new Date().getTime(),
    },
    name: String,
    chapterId: String,
    class: String,
    subject: String,
    numberOfTopics: { type: Number, default: 0 },
});

const chapter = mongoose.model("Chapter", chapterSchema);

export default chapter;
