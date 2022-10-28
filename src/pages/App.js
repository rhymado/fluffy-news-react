import React from "react";
import { Link, createSearchParams } from "react-router-dom";

import logo from "../assets/img/logo.svg";
import styles from "../styles/App.module.css";
import withNavigate from "../helpers/withNavigate";
import withLocation from "../helpers/withLocation";
import withSearchParams from "../helpers/withSearchParams";
import withRouteParams from "../helpers/withRouteParams";
import Header from "../components/Header";

class App extends React.Component {
  state = {
    color: "primary",
    name: "",
  };
  componentDidMount() {
    console.log("did mount");
  }
  componentDidUpdate(prevProps, prevState) {
    console.log("previous", prevState);
    console.log("now", this.state);
  }
  render() {
    const { setSearchParams, params } = this.props;
    console.log(params);
    // console.log("name: ", searchParams.get("name"));
    return (
      <>
        <Header />
        <div className={styles.App}>
          <section
            className={`${styles["App-header"]} ${styles[this.state.color]}`}
          >
            <img src={logo} className={styles["App-logo"]} alt="logo" />
            <div
              className={styles.btn}
              onClick={() => {
                this.setState((state) => ({
                  color: state.color === "primary" ? "secondary" : "primary",
                }));
              }}
            >
              Change Background
            </div>
            <Link className={styles["no-underline"]} to={"/register"}>
              {/* <a href="/login"> */}
              <div className={styles.btn}>Register Here</div>
              {/* </a> */}
            </Link>
            <div
              className={styles.btn}
              onClick={() => {
                this.props.navigate("/position");
              }}
            >
              Position
            </div>
            <input
              type="text"
              onChange={(e) => {
                this.setState({
                  name: e.target.value,
                });
              }}
            />
            <div
              className={styles.btn}
              onClick={() => {
                // logika untuk mengambil semua searchparams menjadi object
                const urlSearchParams = createSearchParams({
                  // spread searchparams yang udh jadi object
                  name: this.state.name,
                });
                setSearchParams(urlSearchParams);
              }}
            >
              Update
            </div>
          </section>
          <main className="container-fluid">
            <section className="row">
              <div className="col-6 col-md-4 bg-primary text-white">
                bg-primary
              </div>
              <div className="col-6 col-md-4 bg-secondary text-white">
                bg-secondary
              </div>
              <div className="col-6 col-md-4 bg-info text-dark">bg-info</div>
            </section>
          </main>
        </div>
      </>
    );
  }
}

const NewComponent = withRouteParams(
  withSearchParams(withLocation(withNavigate(App)))
);

export default NewComponent;
