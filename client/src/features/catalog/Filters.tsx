import { Box, Button, Paper } from "@mui/material";
import Search from "./Search";
import { useAppDispatch, useAppSelector } from "../../app/store/store";
import { resetParams, setBrands, setOrderBy, setTypes } from "./catalogSlice";
import RadioButtonGroup from "../../app/shared/components/RadioButtonGroup";
import CheckBoxButtons from "../../app/shared/components/CheckBoxButtons";

type props = {
  filtersData: { brands: string[]; types: string[] };
};

const Filters = ({filtersData: data}:props) => {
  const sortOptions = [
    { value: "name", label: "Alphabetical" },
    { value: "priceDesc", label: "Price: High to Low" },
    { value: "price", label: "Price: Low to High" },
  ];
  const { orderBy, brands, types } = useAppSelector((state) => state.catalog);

  const dispatch = useAppDispatch();

  return (
    <Box display="flex" flexDirection="column" gap={3}>
      <Paper>
        <Search />
      </Paper>
      <Paper sx={{ p: 3 }}>
        <RadioButtonGroup
          selectedValue={orderBy}
          options={sortOptions}
          onChange={(e) => dispatch(setOrderBy(e.target.value))}
        ></RadioButtonGroup>
      </Paper>
      <Paper sx={{ p: 3 }}>
        <CheckBoxButtons
          items={data.brands}
          checked={brands}
          onChange={(items: string[]) => dispatch(setBrands(items))}
        />
      </Paper>
      <Paper sx={{ p: 3 }}>
        <CheckBoxButtons
          items={data.types}
          checked={types}
          onChange={(items: string[]) => dispatch(setTypes(items))}
        />
      </Paper>
      <Button
        onClick={() => {
          dispatch(resetParams());
          window.scrollTo({ top: 0, behavior: "smooth" });
        }}
      >
        Reset Filters
      </Button>
    </Box>
  );
};

export default Filters;
