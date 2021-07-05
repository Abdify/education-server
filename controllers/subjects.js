import Subject from "../models/subject.js";

export const getSubjects = async (req, res) => {
    const {classId} = req.query;
    const filter = classId ? {class: classId} : {};
    try {
        const subjects = await Subject.find(filter);
        
        res.status(200).json(subjects);
    } catch (error) {
        console.log(error)
        res.json({ message: error.message });
    }
};

export const addSubject = async (req, res) => {
    const subject = req.body;
    const subjectId = subject.name.toLocaleLowerCase().split(" ").join("-");
    const newSubject = new Subject({
        ...subject,
        subjectId,
        addedAt: new Date().getTime(),
    });
    try {
        await newSubject.save();

        res.status(201).json(newSubject);
    } catch (error) {
        console.log(error.message);
        res.status(409).json({ message: error.message });
    }
};
