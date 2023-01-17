import React from "react";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import useStyles from "./styles.js";
import Divider from "@material-ui/core/Divider";
import "./styles.css";

const SearchBox = ({ searchNews, handleChange, handleSubmit }) => {
  const classes = useStyles();

  return (
    <form
      className={classes.root}
      id="outlined-basic"
      label="Outlined"
      variant="outlined"
      onSubmit={handleSubmit}
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        color: "whitesmoke",
        marginBottom: 10,
        textEmphasisColor: "white",
      }}
    >
      <TextField
        id="outlined-helperText"
        label="Search For Topics"
        type="search"
        defaultValue="type here"
        helperText="bitcoin, smartphones, messi"
        variant="outlined"
        value={searchNews}
        onChange={handleChange}
        className={classes.input}
      />
      <Divider className={classes.divider} orientation="vertical" />

      <Button
        className={classes.button}
        variant="contained"
        color="primary"
        size="small"
        width="20%"
        type="submit"
        margin="10px"
        onClick={handleSubmit}
      >
        Search
      </Button>
    </form>
  );
};

export default SearchBox;
