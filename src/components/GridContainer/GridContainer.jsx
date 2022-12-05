import clsx from "clsx";
import React from "react";

const GridContainer = ({ className, children, ...rest }) => {
  return (
    <div className={clsx("container-fluid", className)} {...rest}>
      <div className="row g-4">{children}</div>
    </div>
  );
};

export default GridContainer;
