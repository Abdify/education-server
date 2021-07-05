import mongoose from "mongoose";

const classSchema = mongoose.Schema({
    addedAt: {
        type: Date,
        default: new Date().getTime(),
    },
    name: String,
    classId: String,
    numberOfSubjects: {type: Number, default: 0},
});

const classs = mongoose.model("Class", classSchema);

export default classs;
