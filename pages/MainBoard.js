import React from "react";
import Button from "react-bootstrap/Button";

const MainBoard = () => {
  return (
    <div>
      <h1
        style={{
          color: "green",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        Main Board Area
        <Button variant="primary">Push</Button>
      </h1>

      <p>need a zombies container</p>
      <p>need a survivor team container</p>
      <p>survors to be found container hidden maybe</p>
      <p> items container too</p>

      <div className="container">
        <div className="row">
          <div className="col-4 col-sm-6" style={{ backgroundColor: "blue" }}>
            <div>1</div>
          </div>
          <div className="col-4 col-sm-6" style={{ backgroundColor: "green" }}>
            <div>2</div>
          </div>
          <div className="col-4" style={{ backgroundColor: "red" }}>
            <div>3</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainBoard;
