import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";
import { makeStyles } from "@material-ui/core/styles";
import Slider from "@material-ui/core/Slider";

import FilterOptions from "./FilterOptions";
import FilterControl from "./FilterControl";
import { filterData } from "../../redux/actions/FilterAction";

const useStyles = makeStyles((theme) => ({
  container: {
    display: "flex",
    padding: "10px",
    flexDirection: "column",
  },
}));

function valuetext(value) {
  return `${value}°C`;
}

const Filter = () => {
  const dispatch = useDispatch();
  const classes = useStyles();
  const [filter, setFilter] = useState({
    Price: null,
    floor: null,
    bedroom: null,
    grossm2: null,
  });

  console.log(filter);

  useEffect(() => {
    dispatch(filterData(filter));
  }, [dispatch, filter]);

  const handleChange = (event) => {
    setFilter({
      ...filter,
      [event.target.name]: event.target.value,
    });
  };

  return (
    <div className={classes.container}>
      <Typography style={{ fontWeight: "bold" }} variant="h5">
        Filter
      </Typography>
      <FilterControl
        filter={filter.Price}
        label="Price"
        filterOptions={FilterOptions.prices}
        handleChange={handleChange}
      />
      <FilterControl
        filter={filter.floor}
        label="floor"
        filterOptions={FilterOptions.floor}
        handleChange={handleChange}
      />
      <FilterControl
        filter={filter.bedroom}
        label="bedroom"
        filterOptions={FilterOptions.bedroom}
        handleChange={handleChange}
      />
      <FilterControl
        filter={filter.grossm2}
        label="grossm2"
        filterOptions={FilterOptions.grossm2}
        handleChange={handleChange}
      />
    </div>
  );
};

export default Filter;
