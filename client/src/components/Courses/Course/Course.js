import React from 'react';
import { Card, CardActionArea, CardActions, CardContent, CardMedia, Button, Typography } from '@material-ui/core'
import ThumbUpAltIcon from '@material-ui/icons/ThumbUpAlt';
import DeleteIcon from '@material-ui/icons/Delete';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import moment from 'moment';
import useStyles from './styles';
import { useDispatch } from 'react-redux';

import { deleteCourse, likeCourse } from '../../../actions/courses';

const Course = ({ course, setCurrentId }) => {
    const classes = useStyles();
    const dispatch = useDispatch();

    return (
        <Card className={classes.card}>
            <CardActionArea>
                <CardMedia 
                    className={classes.media}
                    image={course.selectedFile}
                    title={course.title}
                />
                <div className={classes.overlay}>
                    <Typography variant="h6">{course.creator}</Typography>
                    <Typography variant="body2">{moment(course.createdAt).fromNow()}</Typography> 
                </div>
                <div className={classes.overlay2}>
                    <Button 
                        style={{color:'white'}} 
                        size="small" 
                        onClick={() => setCurrentId(course._id)}
                    >
                        <MoreHorizIcon fontSize="default" />
                    </Button>
                </div>
                <div className={classes.details}>
                    <Typography 
                        variant="body2" 
                        color="textSecondary"
                    >
                        {course.tags.map((tag) => `#${tag} `)}
                    </Typography>
                </div>
                <CardContent>
                    <Typography 
                        className={classes.title} 
                        variant="h5" gutterBottom
                    >
                        {course.title}
                    </Typography>
                    <Typography 
                        variant="body1"
                        color="textSecondary" 
                        component="p"
                    >
                        {course.description}
                    </Typography>
                </CardContent>
            </CardActionArea>
            <CardActions className={classes.cardActions}>
                <Button size="small" color="primary" onClick={() => dispatch(likeCourse(course._id))}>
                    {course.likeCount}  &nbsp;
                    <ThumbUpAltIcon fontSize="small" />
                    &nbsp; Like 
                </Button>
                <Button size="small" color="primary" onClick={() => dispatch(deleteCourse(course._id))}>
                    <DeleteIcon fontSize="small" />
                    Delete
                </Button>
            </CardActions>
        </Card>
    );
}

export default Course;