export const FETCH_COURSES_SUCCESS = 'FETCH_COURSES_SUCCESS';
export const fetchCoursesSuccess = (courses) => {
    return {
        type: 'FETCH_COURSES_SUCCESS',
        courses
    };
};

export const FETCH_COURSES_ERROR = 'FETCH_COURSES_ERROR';
export const fetchCoursesError = (error) => {
    return {
        type: 'FETCH_COURSES_ERROR',
        error: error
    };
};
