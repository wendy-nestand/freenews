import { makeStyles } from "@material-ui/core";

const styles = makeStyles({
  root: {
    "& > *": {
      marginBottom: 50,
      marginTop: 30,
    },
  },

  button: {
    width: "100px",
    height: "50px",
    border: "solid black 2px",
    borderRadius: "5px",
    backgroundColor: " #0d1117b3",
    boxShadow: "0px 0px 10px white",
    color: "#0b8bda",
  },

  input: {
    marginRight: 10,
    borderRadius: 5,
    width: "30%",
    boxShadow: "0px 0px 5px whiteSmoke",
    color: "white",
    textEmphasisColor: "white",
  },
});

export default styles;
