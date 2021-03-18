import React, { useState } from 'react';
import { TextField, Button, Typography, Paper } from '@material-ui/core';
import FileBase from 'react-file-base64';

import useStyles from './styles';

const Form = () => {
    const [courseInfo, setCourseInfo] = useState({ creator: '', title: '', description: '', tags: '', selectedFile: '' });
    const classes = useStyles(); 

    const handleSubmit = () => {

    }

    const clear = () => {

    }

    return (
        <Paper className={classes.paper}>
            <form autoComplete="off" noValidate className={`${classes.root} ${classes.form}`} onSubmit={handleSubmit}>
                <Typography variant="h6">Creating a Course</Typography>
                <TextField name="creator" variant="outlined" label="Creator" fullWidth value={courseInfo.creator} onChange={(e) => setCourseInfo({ ...courseInfo, creator: e.target.value })} />
                <TextField name="title" variant="outlined" label="Title" fullWidth value={courseInfo.title} onChange={(e) => setCourseInfo({ ...courseInfo, title: e.target.value })} />
                <TextField name="description" variant="outlined" label="Description" fullWidth value={courseInfo.description} onChange={(e) => setCourseInfo({ ...courseInfo, description: e.target.value })} />
                <TextField name="tags" variant="outlined" label="Tags" fullWidth value={courseInfo.tags} onChange={(e) => setCourseInfo({ ...courseInfo, tags: e.target.value })} />
                <div className={classes.fileInput}><FileBase type="file" multiple={false} onDone={({base64}) => setCourseInfo({...courseInfo, selectedFile: base64}) }/></div>
                <Button className={classes.buttonSubmit} variant="contained" color="primary" size="large" type="submit" fullWidth>Submit</Button>
                <Button variant="contained" color="secondary" size="small" onClick={clear} fullWidth>Clear</Button>
            </form>
        </Paper>
    );
}

export default Form;