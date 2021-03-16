import React from 'react';
import {Container, AppBar, Typography, Grow, Grid} from '@material-ui/core';

import cover from './images/cover.png';

const App = () => {
    return (
        <Container maxWidth="lg">
            <AppBar position="static" color="inherit">
                <Typography variant="h2" align="center">Learn-O</Typography>
                <img src={cover} alt="cover" height="60" />
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