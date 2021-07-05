import Topic from "../models/topic.js";

export const getTopics = async (req, res) => {
    const { chapterId } = req.query;
    const filter = chapterId ? {chapter: chapterId} : {};
    try {
        const topics = await Topic.find(filter);
        
        res.status(200).json(topics);
    } catch (error) {
        console.log(error)
        res.json({ message: error.message });
    }
};

export const addTopic = async (req, res) => {
    const topic = req.body;
    const topicId = topic.name.toLocaleLowerCase().split(" ").join("-");
    const newTopic = new Topic({
        ...topic,
        topicId,
        addedAt: new Date().getTime(),
    });
    try {
        await newTopic.save();

        res.status(201).json(newTopic);
    } catch (error) {
        console.log(error.message);
        res.status(409).json({ message: error.message });
    }
};
