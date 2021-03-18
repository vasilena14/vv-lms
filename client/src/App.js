import React, { useEffect } from 'react';
import {Container, AppBar, Typography, Grow, Grid} from '@material-ui/core';
import { useDispatch } from 'react-redux';

import { getCourses } from './actions/courses';
import Courses from './components/Courses/Courses';
import Form from './components/Form/Form';
import cover from './images/cover.png';
import useStyles from './styles';

const App = () => {
    const classes = useStyles(); 
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getCourses());
    }, [dispatch]);

    return (
        <Container maxWidth="lg">
            <AppBar className={classes.appBar} position="static" color="inherit">
                <Typography className={classes.heading} variant="h2" align="center">Learn-O</Typography>
                <img className={classes.image} src={cover} alt="cover" height="60" />
            </AppBar>
            <Grow in>
                <Container>
                    <Grid container justify="space-between" alignItems="stretch" spacing={3}>
                        <Grid item sx={12} sm={7}>
                            <Courses />
                        </Grid>
                        <Grid item sx={12} sm={4}>
                            <Form />
                        </Grid>
                    </Grid>
                </Container>
            </Grow>
        </Container>
    )
}

export default App;