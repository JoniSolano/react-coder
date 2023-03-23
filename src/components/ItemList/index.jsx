import { Box } from "@mui/material";
import Item from "../Item";
// import "./itemList.css";

function ItemList({products}) {
    return (
        <Box
        component="div"
        sx={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "center",
            gap: 3,
            paddingTop: 1,
        }}>
            {products.map((product, index) => (
                <Item product={product} key={product.id}/>
            ))}
        </Box>
    )
}

export default ItemList;