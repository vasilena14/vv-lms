import React from 'react';
import Course from './Course/Course';
import useStyles from './styles';

const Courses = () => {
    const classes = useStyles(); 
    return (
        <>
        <h1>COURSES</h1>
        <Course />
        <Course />
        </>
    );
}

export default Courses;