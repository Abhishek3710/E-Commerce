import {
  FormControl,
  FormControlLabel,
  Radio,
  RadioGroup,
} from "@mui/material";
import { ChangeEvent } from "react";

type props = {
    options:{value:string, label:string}[]
    onChange:(event: ChangeEvent<HTMLInputElement>)=>void
    selectedValue: string

}

const RadioButtonGroup = ({options, onChange,selectedValue}:props) => {

  return (
    <FormControl>
      <RadioGroup
        onChange={onChange}
        value={selectedValue}
        sx={{my: 0}}
      >
        {options.map(({ value, label }) => (
          <FormControlLabel
            key={value}
            label={label}
            value={value}
            control={<Radio color='secondary' sx={{ py: 0.7 }} />}
          />
        ))}
      </RadioGroup>
    </FormControl>
  );
};

export default RadioButtonGroup;
