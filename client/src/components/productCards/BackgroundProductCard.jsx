import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import MoneyIcon from "../../assets/asset-money-icon.svg";
import { Box } from "@mui/material";
import PurchaseButton from "../buttons/products/PurchaseButton.jsx";

const BackgroundProductCard = ({ value, productName, image, productId }) => {
  return (
    <Card className="w-96" sx={{ maxWidth: 350, borderRadius: 3 }}>
      <CardMedia sx={{ height: 200 }} image={image} title="Product Card" />
      <Box className="mx-2 mb-2">
        <CardContent className="-mb-4 -mt-1">
          <Typography gutterBottom variant="h4" component="div">
            {productName}
          </Typography>
        </CardContent>
        <CardActions className="flex flex-row justify-between">
          <Box className="flex flex-row justify-between space-x-1">
            <img src={MoneyIcon} alt={"Dollar Icon"} className="w-5 h-5" />
            <Typography gutterBottom variant="h5" component="div">
              {value}
            </Typography>
          </Box>
          <PurchaseButton
            title={productName}
            image={image}
            cost={value}
            productId={productId}
            type={0}
          />
        </CardActions>
      </Box>
    </Card>
  );
};

export default BackgroundProductCard;
