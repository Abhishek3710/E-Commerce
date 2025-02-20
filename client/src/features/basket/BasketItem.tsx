import { Remove, Add, Close } from "@mui/icons-material";
import { Paper, Box, Typography, IconButton, Grid2 } from "@mui/material";
import { Item } from "../../app/models/basket";
import { useAddBasketItemMutation, useRemoveBasketItemMutation } from "./basketApi";
import { currancyFormat } from "../../lib/util";

type Props = {
  item: Item;
};

const BasketItem = ({ item }: Props) => {
  const [removeBasketItem] = useRemoveBasketItemMutation();
  const [addBasketItem] = useAddBasketItemMutation();
  return (
    <Paper style={{ height: 140, borderRadius: 3, display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 2 }}>
      <Box display="flex" alignItems="center">
        <img src={item.pictureUrl} alt={item.name} style={{ width: 100, height: 100, objectFit: "cover", borderRadius: 4, marginRight: 8, marginLeft: 4 }} />
        <Box display="flex" flexDirection="column" gap={1}>
          <Typography variant="h6">{item.name}</Typography>
          <Box display="flex" alignItems="center" gap={3}>
            <Typography style={{ fontSize: "1.1rem" }}>
              {currancyFormat(item.price)} x {item.quantity}
            </Typography>
            <Typography color="primary">
              `{currancyFormat(item.price*item.quantity)}`
            </Typography>
          </Box>
          <Grid2 container spacing={1} alignItems="center">
            <IconButton onClick={()=>removeBasketItem({productId:item.productId, quantity:1})} color="error" size="small" style={{ border: "1px solid", borderRadius: 1, minWidth: 0 }}>
              <Remove />
            </IconButton>
            <Typography variant="h6">{item.quantity}</Typography>
            <IconButton onClick={()=>addBasketItem({product:item, quantity:1})} color="success" size="small" style={{ border: "1px solid", borderRadius: 1, minWidth: 0 }}>
              <Add />
            </IconButton>
          </Grid2>
        </Box>
      </Box>
      <IconButton  onClick={()=>removeBasketItem({productId:item.productId, quantity:item.quantity})} color="error" size="small" style={{ border: "1px solid", borderRadius: 1, minWidth: 0, marginRight: 8, marginTop: 8, alignSelf: "start" }}>
        <Close />
      </IconButton>
    </Paper>
  );
};

export default BasketItem;