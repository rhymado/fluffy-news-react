import React from "react";

function Position() {
  return (
    <ol>
      <li>
        <h2>Static</h2>
        <div className="container">
          <div className="box">Box 1</div>
          <div className="box">Box 2</div>
          <div className="box">Box 3</div>
        </div>
      </li>
      <li>
        <h2>Relative</h2>
        <div className="container">
          <div className="box relative left-100">Box 1</div>
          <div className="box relative left-half bottom-50">Box 2</div>
          <div className="box">Box 3</div>
        </div>
      </li>
      <li>
        <h2>Absolute</h2>
        <div className="container relative">
          <div className="box">Box 1</div>
          <div className="box">Box 2</div>
          <div className="box absolute top-right-corner">Box 3</div>
        </div>
      </li>
      <li>
        <h2>Fixed</h2>
        <div className="container">
          <div className="box fixed top-right-corner">Box 1</div>
          <div className="box">Box 2</div>
          <div className="box fixed bottom-right-corner">Box 3</div>
        </div>
      </li>
      <div className="box sticky bottom-50">Box 2</div>
      <li>
        <h2>Sticky</h2>
        <div className="container">
          <div className="box">Box 1</div>
          <div className="box">Box 3</div>
        </div>
      </li>
    </ol>
  );
}

export default Position;
