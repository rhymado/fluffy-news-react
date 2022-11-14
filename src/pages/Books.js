import React, { Component } from "react";
// import Axios from "axios";
import { connect } from "react-redux";
// import axios from "axios";

import Header from "../components/Header";
import styles from "../styles/Books.module.css";
import withSearchParams from "../helpers/withSearchParams";
import withLocation from "../helpers/withLocation";
// import { getBook } from "../https/books";
// import bookActions from "../redux/actions/books";
import { bookActions } from "../redux/slices/books";

function Card({ title, author }) {
  return (
    <div className={styles.card}>
      <p className={styles["book-title"]}>{title}</p>
      <p className={styles["book-author"]}>{author}</p>
    </div>
  );
}
function CardPlaceholder() {
  return (
    <div className={styles.card}>
      <div className={styles["lds-ring"]}>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
  );
}

class Books extends Component {
  state = {
    searchParams: {
      title: "",
      page: 1,
      limit: 10,
    },
    title: "Loading",
  };
  onSearchHandler = (search) => {
    this.setState(
      (prevState) => ({
        searchParams: { ...prevState.searchParams, title: search },
      }),
      () => {
        this.props.setSearchParams(this.state.searchParams);
      }
    );
  };
  onGetBookSuccess = () => {
    this.setState({
      title: "List Buku",
    });
  };
  componentDidMount() {
    // Axios.method(URL, options): promise
    // this.props.setSearchParams(this.state.searchParams);
    // console.log(this.props.location.search);
    this.props.dispatch(bookActions.getBookThunk(this.onGetBookSuccess));
    // axios
    //   .get("https://juicy-worlds.vercel.app/api/v1/products/1")
    //   .then((res) => console.log(res.data))
    //   .catch((err) => console.log(err));
    // getBook()
    //   .then((res) => {
    //     this.setState({
    //       books: res.data.result,
    //     });
    //   })
    //   .catch((err) => console.log(err));
  }
  componentDidUpdate(prevProps) {
    console.log(
      prevProps.searchParams.toString() === this.props.searchParams.toString()
    );
  }
  render() {
    return (
      <>
        <Header onSearchHandler={this.onSearchHandler} />
        <div>{this.state.title}</div>
        <div>
          <main className={styles["main-container"]}>
            {this.props.books.isError && this.props.books.err}
            {!this.props.books.isLoading
              ? this.props.books.data.map((book) => {
                  return (
                    <Card
                      title={book.title}
                      author={book.author}
                      key={book.id}
                    />
                  );
                })
              : new Array(5)
                  .fill(0)
                  .map((_, idx) => <CardPlaceholder key={idx} />)}
          </main>
        </div>
      </>
    );
  }
}
const mapStateToProps = (reduxState) => {
  return {
    counter: reduxState.counter,
    books: reduxState.books,
  };
};

export default connect(mapStateToProps)(withLocation(withSearchParams(Books)));
