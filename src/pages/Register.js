import React, { Component } from "react";
import styles from "../styles/Register.module.css";

import Button from "../components/Button";
import withNavigate from "../helpers/withNavigate";

import granny from "../assets/img/granny.jpg";
import fb from "../assets/img/Facebook.png";
import google from "../assets/img/Twitter.png";
import twitter from "../assets/img/Google.png";

class Register extends Component {
  state = {
    isPwdShown: false,
  };
  onSubmit = (e) => {
    e.preventDefault();
    const userData = {
      email: "mail@mail.com",
      role: "user",
      token:
        "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c",
    };
    localStorage.setItem("user-info", JSON.stringify(userData));
    this.props.navigate("/");
  };
  render() {
    return (
      <>
        <main className={styles.container}>
          <aside className={styles["side-content"]}>
            <img
              className={styles["side-image"]}
              src={granny}
              alt="granny-read-book"
            />
          </aside>
          <section className={styles["form-content"]}>
            <section className={styles["register-form"]} id="register">
              <h1>Sign Up</h1>
              <form className={styles["full-width"]}>
                <div className={styles["input-div"]}>
                  <label>Email Address:</label>
                  <input type="text" placeholder="Enter your email address" />
                </div>
                <div className={styles["input-div"]}>
                  <label>Password:</label>
                  <input
                    type={this.state.isPwdShown ? "text" : "password"}
                    placeholder="Enter your password"
                  />
                  <span>show password</span>
                  <input
                    className={styles["show-pwd"]}
                    type="checkbox"
                    defaultChecked={false}
                    onChange={() => {
                      // console.log("triggered");
                      this.setState((prevState) => ({
                        isPwdShown: prevState.isPwdShown ? false : true,
                      }));
                    }}
                  />
                </div>
                <div className={styles["input-div"]}>
                  <label>Phone Number:</label>
                  <input type="tel" placeholder="Enter your phone number" />
                </div>
                <Button
                  text="Sign Up"
                  variant="primary"
                  onClick={this.onSubmit}
                />
              </form>
            </section>
            <section
              className={`${styles["other-content"]} ${styles["flex-center"]}`}
            >
              <p className={styles["signup-text"]}>OR SIGN UP WITH</p>
              <section className={styles["oauth-button"]}>
                <img className={styles.cursor} src={google} alt="google" />
                <img className={styles.cursor} src={fb} alt="facebook" />
                <img className={styles.cursor} src={twitter} alt="twitter" />
              </section>
              <section
                className={`${styles["login-nav"]} ${styles["flex-center"]} ${styles["full-width"]}`}
              >
                <p>Already have an account</p>
                <Button text="Login Here" variant="secondary" />
              </section>
              <section className={styles["home-nav"]}>
                <p>Back To Home page</p>
              </section>
            </section>
          </section>
        </main>
        <footer className={styles["container"]}>
          <aside className={styles["app-info"]}>
            <p>Why News Today</p>
            <p>Be an Author</p>
            <p>Community</p>
            <p>FAQ</p>
          </aside>
          <aside className={styles["address"]}>
            <p>News Today</p>
            <p>
              Jenderal Sudirman Street No. 23
              <br />
              Jakarta, Indonesia
            </p>
            <p>(621)989898934</p>
            <p>newstoday@gmail.com</p>
          </aside>
        </footer>
      </>
    );
  }
}

export default withNavigate(Register);
