import React, { useState, useEffect } from 'react';
import { TextField, Button, Typography, Paper } from '@material-ui/core';
import FileBase from 'react-file-base64';
import { useDispatch, useSelector } from 'react-redux';

import useStyles from './styles';
import { createCourse, updateCourse } from '../../actions/courses';


const Form = ({ currentId, setCurrentId }) => {
    const course = useSelector((state) => currentId ? state.courses.find((p) => p._id === currentId) : null );
    const [courseData, setCourseData] = useState({ title: '', description: '', tags: '', selectedFile: '' });
    const classes = useStyles(); 
    const dispatch = useDispatch();
    const user = JSON.parse(localStorage.getItem('profile'));

    useEffect(() => {
        if(course) setCourseData(course);
    }, [course])

    const handleSubmit = async (e) => {
        e.preventDefault();

        if(currentId === 0) {
            dispatch(createCourse({...courseData, name: user?.result?.name }));
            clear();
        } else {
            dispatch(updateCourse(currentId, {...courseData, name: user?.result?.name }));
            clear();
        }
    };

    if (!user?.result?.name) {
        return (
            <Paper className={classes.paper}>
                <Typography variant="h6" align="center">
                    Please Sign In to create a new course.
                </Typography>
            </Paper>
        )
    }

    const clear = () => {
        setCurrentId(null);
        setCourseData({title: '', description: '', tags: '', selectedFile: ''});
    }

    return (
        <Paper className={classes.paper}>
            <form autoComplete="off" noValidate className={`${classes.root} ${classes.form}`} onSubmit={handleSubmit}>
                <Typography variant="h6">{currentId ? 'Editing' : 'Creating'} a Course</Typography>
                <TextField 
                    name="title" 
                    variant="outlined" 
                    label="Title" 
                    fullWidth 
                    value={courseData.title} 
                    onChange={(e) => setCourseData({ ...courseData, title: e.target.value })} 
                />
                <TextField 
                    name="description" 
                    variant="outlined" 
                    label="Description" 
                    fullWidth value={courseData.description} 
                    onChange={(e) => setCourseData({ ...courseData, description: e.target.value })}
                />
                <TextField 
                    name="tags" 
                    variant="outlined" 
                    label="Tags" 
                    fullWidth 
                    value={courseData.tags} 
                    onChange={(e) => setCourseData({ ...courseData, tags: e.target.value.split(',') })} 
                />
                <div className={classes.fileInput}>
                    <FileBase 
                        type="file" 
                        multiple={false} 
                        onDone={({base64}) => setCourseData({...courseData, selectedFile: base64}) }
                    />
                </div>
                <Button 
                    className={classes.buttonSubmit} 
                    variant="contained" 
                    color="primary" 
                    size="large" 
                    type="submit" fullWidth>Submit
                </Button>
                <Button 
                    variant="contained" 
                    color="secondary" 
                    size="small" 
                    onClick={clear} 
                    fullWidth
                >
                    Clear
                </Button>
            </form>
        </Paper>
    );
}

export default Form;