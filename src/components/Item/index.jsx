
import { Link } from "react-router-dom";
import { Button, Paper, Typography} from "@mui/material";
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import "./item.css";
function Item({product}) {
    return (
            <Paper 
            sx={{
                borderRadius: 3,
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                overflow: "hidden",
                mt: 5,
                backgroundColor: "#252422",
                color: "#CCC5B9",
                pb: 1,
            }}
            >
                <img className="foto" src={product.image} alt={product.name} />
                <h3>{product.name}</h3>
                <Typography variant="span" sx={{color: "#EB5E28"}}>${product.price}</Typography>
                <Link className="verMas" to={`item/${product.id}`}>
                    <Button variant="outlined" endIcon={<ArrowForwardIosIcon />}
                    sx={{
                        mt: 1,
                        backgroundColor: "#EB5E28", color:"#FFFCF2",
                        border: "none",
                        borderRadius: "1rem",
                    }}>Ver mas</Button>
                </Link>
            </Paper>
        
    )
}

export default Item;