import actionStrings from "../actions/actionStrings";

const initialState = {
  data: [],
  isLoading: false,
  isError: false,
  err: null,
};

const bookReducer = (prevState = initialState, { type, payload }) => {
  switch (type) {
    case actionStrings.getBooks + actionStrings.pending:
      return {
        ...prevState,
        isLoading: true,
        isError: false,
      };
    case actionStrings.getBooks + actionStrings.rejected:
      // const errorResponse = payload;
      // const errorMessage = errorResponse.data.msg;
      return {
        ...prevState,
        isError: true,
        isLoading: false,
        err: payload.err.message,
      };
    case actionStrings.getBooks + actionStrings.fulfilled:
      // const response = payload;
      // const result = response.data.result;
      return {
        ...prevState,
        isLoading: false,
        data: payload.data.result,
      };
    default:
      return prevState;
  }
};

export default bookReducer;
