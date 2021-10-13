// Building reusable component
import React from "react";

// component Paper
// fungsi children di sini sebagai props / property yang dapat direusable dan sebagai base dari sebuah layout

const Paper = ({ children }) => {
  return (
    <div className="container">
      <div className="frame">{children}</div>
    </div>
  );
};

export default Paper;
