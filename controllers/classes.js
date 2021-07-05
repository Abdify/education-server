import Classs from "../models/class.js";

export const getClasses = async (req, res) => {
    
    try {
        const classes = await Classs.find();
        
        res.status(200).json(classes);
    } catch (error) {
        console.log(error)
        res.json({ message: error.message });
    }
};

export const addClass = async (req, res) => {
    const classs = req.body;
    const classId = classs.name.toLocaleLowerCase().split(" ").join("-");
    const newClass = new Classs({
        ...classs,
        classId,
        addedAt: new Date().getTime(),
    });
    try {
        await newClass.save();

        res.status(201).json(newClass);
    } catch (error) {
        console.log(error.message);
        res.status(409).json({ message: error.message });
    }
};
