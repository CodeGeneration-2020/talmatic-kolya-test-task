import React, { FC } from "react";
import { makeStyles } from "@mui/styles";
import { Collapse } from "@mui/material";
import { ICollapseTransitionWrapper } from "./collapse.types";

const useStyles = makeStyles(() => ({
  collapse: {
    transformOrigin: "0 0 0",
  },
}));

const CollapseTransitionWrapper: FC<ICollapseTransitionWrapper> = ({
  condition,
  className,
  children,
}) => {
  const classes = useStyles();

  return (
    <Collapse
      in={condition}
      timeout={{ enter: 600, exit: 300 }}
      className={`${className} ${classes.collapse}`}
      easing={{ enter: "cubic-bezier(0,-1.55,.61,1.58)", exit: "linear" }}
    >
      {children}
    </Collapse>
  );
};

export default CollapseTransitionWrapper;
