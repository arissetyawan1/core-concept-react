// Building reusable component
import React from "react";
import propTypes from "prop-types";

// component Paper
// fungsi children di sini sebagai props / property yang dapat direusable dan sebagai base dari sebuah layout


const Paper = ({ children }) => {
  return (
    <div className="container">
      <div className="frame">{children}</div>
    </div>
  );
};

Paper.propTypes = {
  children: propTypes.oneOfType([
    propTypes.arrayOf(propTypes.node),
    propTypes.node,
  ]),
};
export default Paper;
