import actionStrings from "./actionStrings";
import { getBook } from "../../https/books";

// const getBookAction = () => {
//   return {
//     type: actionStrings.getBooks,
//     payload: getBook(),
//   };
// };

// thunk: action return fungsi
const getBookPending = () => ({
  type: actionStrings.getBooks.concat(actionStrings.pending),
});
const getBookRejected = (err) => ({
  type: actionStrings.getBooks.concat(actionStrings.rejected),
  payload: { err },
});
const getBookFulfilled = (data) => ({
  type: actionStrings.getBooks.concat(actionStrings.fulfilled),
  payload: { data },
});

const getBookThunk = (onSuccess) => {
  return async (dispatch, getState) => {
    try {
      dispatch(getBookPending());
      const result = await getBook();
      dispatch(getBookFulfilled(result.data));
      // console.log("sudah fulfilled");
      if (typeof onSuccess === "function") onSuccess();
    } catch (err) {
      dispatch(getBookRejected(err));
    }
  };
};

const bookAction = {
  getBookThunk,
};

export default bookAction;
