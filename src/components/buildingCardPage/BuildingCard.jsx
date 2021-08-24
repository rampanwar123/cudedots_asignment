import React from "react";
import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";

import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";

const useStyles = makeStyles((theme) => ({
  container: {
    width: "100%",
    height: "300px",
    margin: "5px",
    backgroundColor: "#f0f0f0",
  },
}));

const BuildingCard = (props) => {
  const classes = useStyles();
  return (
    <Link exact to={``}>
      <Box
        boxShadow={2}
        bgcolor="background.paper"
        m={1}
        p={1}
        style={{ width: "100%", height: "20rem" }}
      >
        <div>
          <Typography variant="h5">BuildingCard {props.data}</Typography>
        </div>
      </Box>
    </Link>
  );
};
export default BuildingCard;
