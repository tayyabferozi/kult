import React from "react";
import clsx from "clsx";

const Button = ({ className, primary, children, ...rest }) => {
  return (
    <button className={clsx("btn", className, { primary })} {...rest}>
      {children}
    </button>
  );
};

export default Button;
