import React from "react";
import Button from "react-bootstrap/Button";

const peopleArray = [
  { name: "One", pic: "picture" },
  { name: "two", pic: "picture" },
  { name: "three", pic: "picture" },
];

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
          <div
            className="col-8"
            style={{
              backgroundColor: "blue",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            {peopleArray.map((ind) => {
              return (
                <div>
                  <div>{ind.name}</div>
                  <div>{ind.pic}</div>
                </div>
              );
            })}
          </div>
        </div>

        <div className="row">
          <div className="col-2" style={{ backgroundColor: "green" }}>
            <div>left</div>
          </div>
          <div className="col-4" style={{ backgroundColor: "white" }}>
            <div>Middle</div>
          </div>
          <div className="col-2" style={{ backgroundColor: "green" }}>
            <div>right</div>
          </div>
        </div>

        <div className="row">
          <div className="col-8" style={{ backgroundColor: "red" }}>
            <div>bottom</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainBoard;
