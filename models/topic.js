import mongoose from "mongoose";

const topicSchema = mongoose.Schema({
    addedAt: {
        type: Date,
        default: new Date().getTime(),
    },
    name: String,
    topicId: String,
    class: String,
    subject: String,
    chapter: String,
});

const topic = mongoose.model("Topic", topicSchema);

export default topic;
