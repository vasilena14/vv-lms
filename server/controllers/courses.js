import mongoose from 'mongoose';
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

export const createCourse = async (req, res) => {
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

export const updateCourse =  async (req, res) => {
    const { id: _id } = req.params;
    const course = req.body;

    if(!mongoose.Types.ObjectId.isValid(_id)) return res.status(404).send('No post with that id');

    const updatedCourse = await CourseInfo.findByIdAndUpdate(_id, {...course, _id} , {new: true});

    res.json(updatedCourse);
}

export const deleteCourse =  async (req, res) => {
    const { id } = req.params;

    if(!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send('No post with that id');

    await CourseInfo.findByIdAndRemove(id);

    console.log('DELETE')

    res.json({ message: 'Course deleted successfully' });
}

export const likeCourse = async (req, res) => {
    const { id } = req.params;

    if(!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send('No post with that id');

    const course = await CourseInfo.findById(id);
    const updatedCourse = await CourseInfo.findByIdAndUpdate(id, { likeCount: course.likeCount + 1 }, { new: true });

    res.json(updatedCourse);
}