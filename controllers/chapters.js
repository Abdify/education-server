import Chapter from "../models/chapter.js";

export const getChapters = async (req, res) => {
    const { subjectId } = req.query;
    const filter = subjectId.length ? {subject: subjectId} : {};
    try {
        const chapters = await Chapter.find(filter);
        
        console.log(chapters)
        res.status(200).json(chapters);
    } catch (error) {
        console.log(error)
        res.json({ message: error.message });
    }
};

export const addChapter = async (req, res) => {
    const chapter = req.body;
    const chapterId = chapter.name.toLocaleLowerCase().split(" ").join("-");
    const newChapter = new Chapter({
        ...chapter,
        chapterId,
        addedAt: new Date().getTime(),
    });
    try {
        await newChapter.save();

        res.status(201).json(newChapter);
    } catch (error) {
        console.log(error.message);
        res.status(409).json({ message: error.message });
    }
};
