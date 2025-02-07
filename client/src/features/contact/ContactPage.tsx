import { decrement, increment} from "./counterReducer";
import { Button, ButtonGroup, Typography } from "@mui/material";
import { useAppDispatch, useAppSelector } from "../../app/store/store";

const ContactPage = () => {
  const {data} = useAppSelector((state)=> state.counter)
  const dispatch = useAppDispatch();
  return (
    <>
      <Typography variant="h4">Contact Page</Typography>
      <Typography variant="h5">{data}</Typography>
      <ButtonGroup>
        <Button onClick={()=>dispatch(increment(1))}>Increment</Button>
        <Button onClick={()=>dispatch(decrement(1))}>Increment</Button>
        <Button onClick={()=>dispatch(increment(5))}>Increment by 5</Button>
        <Button onClick={()=>dispatch(decrement(5))}>Increment by 5</Button>
      </ButtonGroup>
    </>
  );
};

export default ContactPage;
