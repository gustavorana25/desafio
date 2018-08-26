export const FETCH_MODULES_SUCCESS = 'FETCH_MODULES_SUCCESS';
export const fetchModulesSuccess = (idCourse,modules) => {
    return {
        type: 'FETCH_MODULES_SUCCESS',
        all: { [idCourse]: modules}
    };
};

export const FETCH_MODULES_ERROR = 'FETCH_MODULES_ERROR';
export const fetchModulesError = (error) => {
    return {
        type: 'FETCH_MODULES_ERROR',
        error: error
    };
};
