import { FormGroup, FormControlLabel, Checkbox } from "@mui/material";
import { useEffect, useState } from "react";

type props = {
  items: string[];
  checked: string[];
  onChange: (items: string[]) => void;
};

const CheckBoxButtons = ({ items, checked, onChange }: props) => {
  const [checkedItems, setCheckedItems] = useState(checked);

  useEffect(() => {
    setCheckedItems(checked);
  }, [checked]);

  const handleToggle = (value: string) => {
    const updatedChecked = checkedItems?.includes(value)
      ? checkedItems.filter((item) => item !== value)
      : [...checkedItems, value];
    setCheckedItems(updatedChecked);
    onChange(updatedChecked);
  };
  return (
    <FormGroup>
      {items.map((item) => (
        <FormControlLabel
          key={item}
          label={item}
          control={
            <Checkbox
              color="secondary"
              checked={checkedItems.includes(item)}
              onClick={() => handleToggle(item)}
              sx={{ py: 0.7, fontSize: 40 }}
            />
          }
        />
      ))}
    </FormGroup>
  );
};

export default CheckBoxButtons;
