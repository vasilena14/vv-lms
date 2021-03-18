export default (courses = [], action) => {
    switch (action.type) {
        case 'FETCH_ALL':
            return action.payload;
        case 'CREATE':
            return courses;
        default:
            return courses;
    }
}