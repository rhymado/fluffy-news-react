import Axios from "axios";

const getBook = () => {
  const url = `${process.env.REACT_APP_BACKEND_HOST}api/v1/books?page=1&limit=10`;
  return Axios.get(url);
};

export { getBook };
