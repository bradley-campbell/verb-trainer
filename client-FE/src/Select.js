import React from "react";
import styled from "styled-components";
import { makeStyles } from "@material-ui/core/styles";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";

const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
}));

const OptionSelect = ({ query, setQuery, choices, label, queryKey }) => {
    
  const classes = useStyles();

  return (
    <FormControl className={classes.formControl}>
      <InputLabel id="demo-simple-select-autowidth-label">{label}</InputLabel>
      <Select
        labelId="demo-simple-select-autowidth-label"
        id="demo-simple-select-autowidth"
        value={query[queryKey]}
        onChange={(e) => {
          setQuery({ ...query, [queryKey]: e.target.value });
        }}
        autoWidth
      >
        {choices.map((item) => (
          <MenuItem value={item}>{item}</MenuItem>
        ))}
      </Select>
    </FormControl>
  );
};

export default OptionSelect;

const Wrapper = styled.div``;

//   <select
//         onChange={(e) => {
//           setQuery({ ...query, personne: e.target.value });
//         }}
//         required
//       >
//         <option></option>
//         {choices.map((item) => (
//           <option value={item}>{item}</option>
//         ))}
//       </select>
