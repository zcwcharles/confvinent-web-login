import React from "react";
import './Container.scss';

const Container = props => {
  return (
    <div className={`container ${props.className}`}>
      {props.children}
    </div>
  );
};

export default Container;
