import { colors } from "@material-ui/core";
import { makeStyles, withTheme } from "@material-ui/core/styles";

const styles = makeStyles({
  container: {
    padding: "0 5%",
    width: "100%",
    margin: 0,
  },
  card: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    alignItems: "center",
    width: "100%",
    height: "50vh",
    padding: "5%",
    borderRadius: 10,
    color: "white",
    "&:hover": {
      display: "flex",
      flexDirection: "column",
      justifyContent: "space-between",
      borderBottom: "10px solid #0d1117b3",
      backgroundColor: "#0d1117b3",
      boxShadow: "0px 0px 20px #0b8bda",
      transition: "transform 0.3s ease-in-out",
    },
  },
  infoCard: {
    display: "flex",
    flexDirection: "column",
    textAlign: "center",
    "&:hover": {
      color: "#0b8bda",
      Text: "#0b8bda",
    },
  },
});

export default styles;
