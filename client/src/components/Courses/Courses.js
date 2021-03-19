import React from 'react';
import { useSelector } from 'react-redux';

import Course from './Course/Course';

import useStyles from './styles';

const Courses = () => {
    const courses = useSelector((state) => state.courses);
    const classes = useStyles();

    console.log(courses);
    
    return (
        <>
        <h1>COURSES</h1>
        <Course />
        <Course />
        </>
    );
}

export default Courses;