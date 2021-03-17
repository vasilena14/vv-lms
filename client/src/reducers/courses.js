export default (courses = [], action) => {
    switch (action.type) {
        case 'FETCH_ALL':
            return courses;
        case 'CREATE':
            return courses;
        default:
            return courses;
    }
}