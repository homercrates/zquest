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
    </div>
  );
};

export default MainBoard;
