const defaultState = {
    listOfCourses: []
};

export const coursesReducer = (state = defaultState, action) => {
  switch (action.type) {
    case "UPDATE_LIST":
        return {
            ...state,
            viewType: action.list
        };

    default:
        return state;
  }
};

export default coursesReducer;