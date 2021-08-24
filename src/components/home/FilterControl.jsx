import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormControl from "@material-ui/core/FormControl";
import FormLabel from "@material-ui/core/FormLabel";

const useStyles = makeStyles((theme) => ({
  container: {
    display: "flex",
    padding: "20px",
  },
  label: {
    fontWeight: "bold",
    color: "black",
    marginBottom: "10px",
  },
}));

const FilterControl = (props) => {
  const { label, filterOptions, handleChange, filter } = props;
  const classes = useStyles();

  return (
    <div className={classes.container}>
      <FormControl component="fieldset">
        <FormLabel component="legend" className={classes.label}>
          {label}
        </FormLabel>
        <RadioGroup
          aria-label={label}
          name={label}
          value={filter}
          onChange={handleChange}
        >
          {filterOptions.map((val, index) => (
            <FormControlLabel
              key={index}
              value={val}
              control={<Radio />}
              label={val}
            />
          ))}
        </RadioGroup>
      </FormControl>
    </div>
  );
};
export default FilterControl;
