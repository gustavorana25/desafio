export const FETCH_TEACHERS_SUCCESS = 'FETCH_TEACHERS_SUCCESS';
export const fetchTeachersSuccess = (courses) => {
    return {
        type: 'FETCH_TEACHERS_SUCCESS',
        courses
    };
};

export const FETCH_TEACHERS_ERROR = 'FETCH_TEACHERS_ERROR';
export const fetchTeachersError = (error) => {
    return {
        type: 'FETCH_TEACHERS_ERROR',
        error: error
    };
};
