import Products from "../../mocks/products";
import { useEffect, useState} from "react";
import ItemList from "../ItemList";
import "./itemListContainer.css";

function ItemListContainer ({ categoryId, isCategoryRoute }) {
    const [products, setProducts] = useState([])
    useEffect(() => {
        const productsPromise = new Promise((resolve, reject) => setTimeout (() => resolve(Products), 2000))

        productsPromise
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

    console.log({products});

    // const productsList = Products
    return (
        <div>
            <ul>
                <ItemList products={products}/>
            </ul>
        </div>)
        }

export default ItemListContainer;