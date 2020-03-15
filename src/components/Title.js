import React from "react";

const Title = ({ name, title }) => {
  return (
    <div className="row py-4">
      <div className="col-10 mx-auto text-center text-title">
        <h1 className="text-capitalize font-weight-bold">
          {name} <strong className="text-blue">{title}</strong>
        </h1>
      </div>
    </div>
  );
};

export default Title;