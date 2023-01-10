import { makeStyles } from "@material-ui/core";

const styles = makeStyles({
  root: {
    button: {
      marginTop: 100,
      width: "50ch",
      border: "solid",
      borderRadius: 15,
    },
    "& > *": {
      marginBottom: 50,
      marginTop: 30,
    },
  },

  input: {
    marginRight: 10,
    borderRadius: 15,
    width: "50%",
  },
  button: {
    borderRadius: 20,
    width: "20%",
  },
});

export default styles;
