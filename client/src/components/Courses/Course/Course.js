import React from 'react';
import { Card, CardActionArea, CardActions, CardContent, CardMedia, Button, Typography } from '@material-ui/core'
import ThumbUpAltIcon from '@material-ui/icons/ThumbUpAlt';
import ThumbUpAltOutlined from '@material-ui/icons/ThumbUpAltOutlined';
import DeleteIcon from '@material-ui/icons/Delete';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import moment from 'moment';
import useStyles from './styles';
import { useDispatch } from 'react-redux';

import { deleteCourse, likeCourse } from '../../../actions/courses';

const Course = ({ course, setCurrentId }) => {
    const classes = useStyles();
    const dispatch = useDispatch();
    const user = JSON.parse(localStorage.getItem('profile'));

    const Likes = () => {
        if (course.likes.length > 0) {
            return course.likes.find((like) => like === (user?.result?.googleId || user?.result?._id))
            ? (
                <><ThumbUpAltIcon fontSize="small" />&nbsp;{course.likes.length > 2 ? `You and ${course.likes.length - 1} others` : `${course.likes.length} like${course.likes.length > 1 ? 's' : ''}` }</>
            ) : (
                <><ThumbUpAltIcon fontSize="small" />&nbsp;{course.likes.length} {course.likes.length === 1 ? 'Like' : 'Likes'}</>
            );
        }

        return <><ThumbUpAltOutlined fontSize="small" />&nbsp;Like</>
    };

    return (
        <Card className={classes.card}>
            <CardActionArea>
                <CardMedia 
                    className={classes.media}
                    image={course.selectedFile}
                    title={course.title}
                />
                <div className={classes.overlay}>
                    <Typography variant="h6">{course.name}</Typography>
                    <Typography variant="body2">{moment(course.createdAt).fromNow()}</Typography> 
                </div>
                {(user?.result?.googleId === course?.creator || user?.result?._id === course?.creator) && (
                    <div className={classes.overlay2}>
                        <Button 
                            style={{color:'white'}} 
                            size="small" 
                            onClick={() => setCurrentId(course._id)}
                        >
                            <MoreHorizIcon fontSize="default" />
                        </Button>
                    </div>
                )}
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
                <Button size="small" color="primary" disabled={!user?.result} onClick={() => dispatch(likeCourse(course._id))}>
                    <Likes />
                </Button>
                {(user?.result?.googleId === course?.creator || user?.result?._id === course?.creator) && (
                    <Button size="small" color="primary" onClick={() => dispatch(deleteCourse(course._id))}>
                        <DeleteIcon fontSize="small" />
                        Delete
                    </Button>
                )}
            </CardActions>
        </Card>
    );
}

export default Course;