import React, { Component } from "react";
import Axios from "axios";

import Header from "../components/Header";
import styles from "../styles/Books.module.css";
import withSearchParams from "../helpers/withSearchParams";
import withLocation from "../helpers/withLocation";

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
    books: [],
    searchParams: {
      title: "",
      page: 1,
      limit: 10,
    },
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
  componentDidMount() {
    // Axios.method(URL, options): promise
    this.props.setSearchParams(this.state.searchParams);
    // console.log(this.props.location.search);
    const url = "http://localhost:8080/api/v1/books?page=1&limit=10";
    Axios.get(url)
      .then((res) => {
        this.setState({
          books: res.data.result,
        });
      })
      .catch((err) => console.log(err));
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
        <div>
          <main className={styles["main-container"]}>
            {this.state.books.length > 0
              ? this.state.books.map((book) => {
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

export default withLocation(withSearchParams(Books));
