import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import SearchBox from "../searchBox/SearchBox";
import classNames from "classnames";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary,
  },
}));

const Header = ({ searchNews, handleChange, handleSubmit }) => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Grid
        container
        spacing={3}
        direction="row"
        justifyContent="center"
        alignItems="center"
      >
        <Grid item xs={12}>
          <SearchBox
            searchNews={searchNews}
            handleChange={handleChange}
            handleSubmit={handleSubmit}
          ></SearchBox>
        </Grid>
      </Grid>
    </div>
  );
};

export default Header;
