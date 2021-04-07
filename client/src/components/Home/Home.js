import React, { useState, useEffect } from 'react';
import {Container, Grow, Grid} from '@material-ui/core';
import { useDispatch } from 'react-redux';
import { getCourses } from '../../actions/courses';

import Courses from '../Courses/Courses';
import Form from '../Form/Form';

const Home = () => {
    const [currentId, setCurrentId] = useState(0);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getCourses());
    }, [currentId, dispatch]);

    return (
        <Grow in>
            <Container>
                <Grid container justify="space-between" alignItems="stretch" spacing={3}>
                    <Grid item sx={12} sm={7}>
                        <Courses setCurrentId={setCurrentId} />
                    </Grid>
                    <Grid item sx={12} sm={4}>
                        <Form currentId={currentId} setCurrentId={setCurrentId} />
                    </Grid>
                </Grid>
            </Container>
        </Grow>
    )
}

export default Home;