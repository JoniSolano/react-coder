import Products from "../../mocks/products";
import { useEffect, useState} from "react";
import ItemList from "../ItemList";
import { Container } from "@mui/material";
// import "./itemListContainer.css";

function ItemListContainer ({ categoryId, isCategoryRoute }) {
    const [products, setProducts] = useState([])
    useEffect(() => {
        const getProducts = new Promise((resolve, reject) => setTimeout (() => resolve(Products), 2000))

        getProducts
        .then((response) => {
            if (isCategoryRoute) {
                const productsFiltered = response.filter((product) => product.category === categoryId
            );
            setProducts(productsFiltered);
            } else {
                setProducts(response);
            }
             
        })
        .catch((err) => console.log(err));

    }, [categoryId]);

    return (
        <Container maxWidth={false} sx={{ backgroundColor: "#FFFCF2"}}>
                <ItemList products={products}/>
        </Container>)
        }

export default ItemListContainer;