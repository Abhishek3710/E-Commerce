import {
  Card,
  CardMedia,
  CardContent,
  Typography,
  CardActions,
  Button,
} from "@mui/material";
import { Product } from "../../app/models/product";
import { Link } from "react-router-dom";

type Props = {
  product: Product;
};

const ProductCard = ({ product }: Props) => {
  return (
    <Card elevation={3} sx={{ width: 280,borderRadius:2, justifyContent:'center', display:'flex', flexDirection:'column'}}>
      <CardMedia
        sx={{ height: 240, backgroundSize: "cover" }}
        component="img"
        height="140"
        image={product.pictureUrl}
        alt={product.name}
      />
      <CardContent>
        <Typography
          variant="subtitle2"
          gutterBottom
          sx={{ textTransform: "uppercase" }}
        >
          {product.name}
        </Typography>
        <Typography variant="h6" sx={{ color: "secondary.main" }}>
          ${(product.price / 100).toFixed(2)}
        </Typography>
      </CardContent>
      <CardActions sx={{ justifyContent: "space-between" }}>
        <Button size="small">Add to Cart</Button>
        <Button size="small" component={Link} to = {`/catalog/${product.id}`}>View</Button>
      </CardActions>
    </Card>
  );
};

export default ProductCard;
