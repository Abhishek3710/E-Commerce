import {
  Box,
  Button,
  Divider,
  Paper,
  TextField,
  Typography,
} from "@mui/material";
import { Form, Link } from "react-router-dom";
import { useFetchBasketQuery } from "../../../features/basket/basketApi";
import { currancyFormat } from "../../../lib/util";

const OrderSummary = () => {
  const { data: basket } = useFetchBasketQuery();
  const subtotal =
    basket?.items.reduce((sum, item) => sum + item.price * item.quantity, 0) ||
    0;
  const deliveryFee = subtotal < 10000 ? 500 : 0;
  

  return (
    <Box
      display="flex"
      flexDirection="column"
      alignItems="center"
      maxWidth="lg"
      mx="auto"
    >
      <Paper sx={{ mb: 2, p: 3, width: "100%", borderRadius: 3 }}>
        <Typography variant="h6" component="p" fontWeight="bold">
          Order Summary
        </Typography>
        <Typography variant="body2" sx={{ fontStyle: "italic" }}>
          Orders over $100 qualify for free delivery
        </Typography>
        <Box mt={2}>
          <Box display="flex" justifyContent="space-between" mb={1}>
            <Typography color="textSecondary">SubTotal</Typography>{" "}
            <Typography>{currancyFormat(subtotal)}</Typography>
          </Box>
          <Box display="flex" justifyContent="space-between" mb={1}>
            <Typography color="textSecondary">Discount</Typography>{" "}
            <Typography>$0.00</Typography>
          </Box>
          <Box display="flex" justifyContent="space-between" mb={1}>
            <Typography color="textSecondary">Delivery Fee</Typography>{" "}
            <Typography>{currancyFormat(deliveryFee)}</Typography>
          </Box>
          <Divider sx={{ my: 2 }} />
          <Box display="flex" justifyContent="space-between" mb={1}>
            <Typography color="textSecondary">Total</Typography>{" "}
            <Typography>{currancyFormat(subtotal + deliveryFee)}</Typography>
          </Box>
          <Box justifyContent={"center"}>
            <Button
              component ={Link}
              to= '/checkout'
              variant="contained"
              color="primary"
              fullWidth
              sx={{ mb: 1 }}
              
            >
              CheckOut
            </Button>
            <Button fullWidth component ={Link}
              to= '/catalog'> CONTINUE SHOPPING </Button>
          </Box>
        </Box>
      </Paper>
      <Paper sx={{ mb: 2, p: 3, width: "100%", borderRadius: 3 }}>
        <Form>
          <Typography variant="subtitle1" component="label">
            Do you have any voucher code?
          </Typography>
          <TextField
            label="Voucher code"
            variant="outlined"
            fullWidth
            sx={{ my: 2 }}
          ></TextField>
          <Button type="submit" variant="contained" color="primary" fullWidth>
            Apply Code
          </Button>
        </Form>
      </Paper>
    </Box>
  );
};

export default OrderSummary;
