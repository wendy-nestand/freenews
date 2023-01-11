import { makeStyles } from "@material-ui/core/styles";

export default makeStyles({
  media: {
    height: 250,
  },

  border: {
    border: "solid",
  },
  fullHeightCard: {
    height: "100%",
  },
  card: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    borderBottom: "10px solid #0d1117b3",
    backgroundColor: "#0d1117b3",
  },
  activeCard: {
    borderBottom: "10px solid #0d1117b3",
  },
  grid: {
    display: "flex",
  },
  details: {
    display: "flex",
    justifyContent: "space-between",
    margin: "20px",
    color: "white",
  },
  title: {
    padding: "0 16px",
    color: "#0b8bda",
  },
  cardActions: {
    padding: "0 16px 8px 16px",
    display: "flex",
    justifyContent: "space-between",
    color: "white",
  },
  button: {
    width: "100px",
    height: "40px",
    border: "solid black 2px",
    borderRadius: "5px",
    backgroundColor: " #0d1117b3",
    boxShadow: "0px 0px 10px white",
    color: "whiteSmoke",
  },
  cardContent: {
    color: "white",
  },
  tsource: {
    color: "#0b8bda",
  },
});
