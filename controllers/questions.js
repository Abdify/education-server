import Question from '../models/question.js';

export const getQuestions = async (req, res) => {
    const { userId, topicId } = req.query;
    let filter = {};
    userId ? filter["addedBy._id"] = userId : {};
    topicId ? filter["source.topic"] = topicId : {}; 
    try {
        const questions = await Question.find(filter);
        res.status(200).json(questions);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
};

export const addQuestion = async (req, res) => {
    const question = req.body;
    const newQuestion = new Question({
        ...question,
        addedAt: new Date().getTime(),
    });
    try {
        await newQuestion.save();

        res.status(201).json(newQuestion);
    } catch (error) {
        console.log(error.message)
        res.status(409).json({ message: error.message });
    }
};
