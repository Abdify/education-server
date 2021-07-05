import Course from "../models/course.js";

export const getCourses = async (req, res) => {
    try {
        const courses = await Course.find();

        res.status(200).json(courses);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
};

export const createCourse = async (req, res) => {
    const course = req.body;
    const newCourse = new Course({
        ...course,
        createdAt: new Date().toISOString(),
    });
    try {
        await newCourse.save();

        res.status(201).json(newCourse);
    } catch (error) {
        res.status(409).json({ message: error.message });
    }
};




