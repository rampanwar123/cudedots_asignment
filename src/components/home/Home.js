import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { makeStyles } from "@material-ui/core/styles";
import AutoCarousel from "../shared/AutoCarousel";
import BuildingCard from "../buildingCardPage/BuildingCard";
import { filterData } from "../../redux/actions/FilterAction";

import Filter from "./Filter";

const useStyles = makeStyles((theme) => ({
  container: {
    display: "flex",
    flexDirection: "row",
    overflow: "auto",
    backgroundColor: "#f0f0f0",
  },
  box1: {
    display: "flex",
    width: "20%",

    margin: "10px",
    backgroundColor: "white",
  },
  box2: {
    display: "flex",
    width: "80%",
    flexWrap: "wrap",
    justifyContent: "space-evenly",

    margin: "10px",
    backgroundColor: "white",
  },
}));

const Home = () => {
  const dispatch = useDispatch();
  const classes = useStyles();

  const buildingdata = useSelector(({ FilterReducer }) => FilterReducer.data);
  console.log(buildingdata);

  return (
    <>
      <AutoCarousel />
      <div className={classes.container}>
        <div className={classes.box1}>
          <Filter />
        </div>
        <div className={classes.box2}>
          {buildingdata?.map((val) => (
            <BuildingCard key={val.uniqueID} data={val.uniqueID} />
          ))}
        </div>
      </div>
    </>
  );
};

export default Home;
