import axios from 'axios';

const url = 'https://vv-lms.herokuapp.com/courses';

export const fetchCourses = () => axios.get(url);
export const createCourse = (newCourse) => axios.post(url, newCourse);
export const updateCourse = (id, updatedCourse) => axios.patch(`${url}/${id}`, updatedCourse);
export const deleteCourse = (id) => axios.delete(`${url}/${id}`);
export const likeCourse = (id) => axios.patch(`${url}/${id}/LikeCourse`);