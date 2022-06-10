import React, { FC, useState } from "react";
import { Box, IconButton, Theme, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
import ClearIcon from "@mui/icons-material/Clear";
import CollapseTransitionWrapper from "../CollapseTransitionWrapper";
import { IListProps, IUseStylesProps } from "./selectedList.types";

const useStyles = makeStyles((theme: Theme) => ({
  container: {
    width: "600px",
  },
  row: {
    margin: theme.spacing(2, 0, 2, 5),
  },
  title: {
    textTransform: "uppercase",
    fontWeight: 700,
    cursor: ({ isExistItems }: IUseStylesProps) =>
      isExistItems ? "pointer" : "default",
    transition: "150ms ease-in",
    padding: theme.spacing(2, 4),
    width: "100%",
    borderRadius: "4px",
    backgroundColor: ({ isExistItems }: IUseStylesProps) =>
      isExistItems ? theme.palette.primary.dark : "initial",

    "&:hover": {
      backgroundColor: ({ isExistItems }: IUseStylesProps) =>
        isExistItems ? theme.palette.primary.light : "initial",
    },
  },
  contentWrapper: {
    display: "flex",
  },
  item: {
    display: "flex",
    alignItems: "center",
    justifyContent: ({ isExistActive }: IUseStylesProps) =>
      isExistActive ? "space-between" : "initial",
    height: "40px",
  },
  numberElement: {
    display: "inline-block",
    paddingRight: theme.spacing(3),
  },
  content: {
    display: "block",
  },
  emptyText: {
    fontSize: "1.125rem",
    color: theme.palette.secondary.main,
  },
}));

const SelectedList: FC<IListProps> = ({ title, items, actionHandler }) => {
  const classes = useStyles({
    isExistActive: !!actionHandler,
    isExistItems: !!items.length,
  });
  const [isOpen, setIsOpen] = useState(true);

  const handleClick = (itemToDelete: string) =>
    actionHandler && actionHandler(itemToDelete);

  const toggleOpenCollapse = () => !!items.length && setIsOpen(!isOpen);

  return (
    <Box className={classes.container}>
      <Typography className={classes.title} onClick={toggleOpenCollapse}>
        {title}
      </Typography>

      <Box className={classes.row}>
        {!!items && items.length ? (
          items.map((item, idx) => (
            <CollapseTransitionWrapper key={item} condition={isOpen}>
              <Box className={classes.item}>
                <Box className={classes.contentWrapper}>
                  <Typography className={classes.numberElement}>
                    {++idx}.
                  </Typography>
                  <Typography className={classes.content}>{item}</Typography>
                </Box>

                {!!actionHandler && (
                  <IconButton onClick={() => handleClick(item)}>
                    <ClearIcon />
                  </IconButton>
                )}
              </Box>
            </CollapseTransitionWrapper>
          ))
        ) : (
          <Box>
            <Typography className={classes.emptyText}>
              Already you doen't add any elements
            </Typography>
          </Box>
        )}
      </Box>
    </Box>
  );
};

export default SelectedList;
