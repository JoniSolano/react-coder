import {collection, getDocs, getFirestore, query, where,} from "firebase/firestore";
import { useEffect, useState} from "react";
import ItemList from "../ItemList";
import { Container } from "@mui/material";

function ItemListContainer ({ categoryId, isCategoryRoute }) {
    const [products, setProducts] = useState([])

    const getDocsFromFirebase = async (collection) => {
        await getDocs(collection)
          .then((snapshot) => {
            const docs = snapshot.docs;
            setProducts(docs.map((doc) => ({ id: doc.id, ...doc.data() })));
          })
          .catch((error) => console.log({ error }));
      };

    useEffect(() => {
        const db = getFirestore();
        const itemsCollection = collection(db, "items");
    
        if (isCategoryRoute) {
          const queryResult = query(
            itemsCollection,
            where("category", "==", categoryId)
          );
    
          getDocsFromFirebase(queryResult);
        } else {
          getDocsFromFirebase(itemsCollection);
        }
      }, [categoryId]);

    return (
        <Container maxWidth={false} sx={{ backgroundColor: "#FFFCF2"}}>
                <ItemList products={products}/>
        </Container>)
        }

export default ItemListContainer;