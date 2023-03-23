import ItemDetail from '../ItemDetail';
import products from "../../mocks/products";
import { useEffect, useState } from "react";


function ItemDetailContainer({productDetail}) {
    const [detailProd, setDetailProd] = useState({});

    useEffect (() => {
        const detail = products.find(
            (product) => product.id === parseInt(productDetail)
            );
            setDetailProd(detail);
    }, [productDetail]);

    return (
        <div>
            <ItemDetail product={detailProd} />
        </div>
    );
}

export default ItemDetailContainer;