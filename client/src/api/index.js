import axios from 'axios';

const API = axios.create({ baseURL: 'http://localhost:5000' })

// const url = 'https://vv-lms.herokuapp.com/courses';

export const fetchCourses = () => API.get('/courses');
export const createCourse = (newCourse) => API.post('/courses', newCourse);
export const likeCourse = (id) => API.patch(`/courses/${id}/likeCourse`);
export const updateCourse = (id, updatedCourse) => API.patch(`/courses/${id}`, updatedCourse);
export const deleteCourse = (id) => API.delete(`/courses/${id}`);

export const signIn = (formData) => API.post('/user/signin', formData);
export const signUp = (formData) => API.post('/user/signup', formData);
