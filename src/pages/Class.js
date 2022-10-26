import React from "react";
// const React = require('react') ==> bentuk ES5

class HomeComponent extends React.Component {
  constructor() {
    super();
    this.state = {};
  }
  state = {
    isShown: true,
  };
  componentDidMount = () => {
    console.log(this.state.isShown);
  };
  render() {
    // method yang mereturnkan elemen HTML
    return <></>;
  }
}

export default HomeComponent;
