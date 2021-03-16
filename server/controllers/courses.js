import CourseInfo from '../models/courseInfo.js';

export const getCourses = async (req, res) => {
    try {
        const courseInfo = await CourseInfo.find();

        // console.log(courseInfo);

        res.status(200).json(courseInfo);
    } catch (error) {
        res.status(404).json({message: error.message});
    }
}

export const createCourses = async (req, res) => {
    // res.send('Course Creation');
    const course = req.body;

    const newCourse = new CourseInfo(course);

    try {
        await newCourse.save();

        res.status(201).json(newCourse);
    } catch (error) {
        res.status(409).json({message: error.message});
    }
}