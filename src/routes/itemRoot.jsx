import NavBar from "../components/NavBar";
import ItemDetailContainer from "../components/ItemDetailContainer";
import { useParams } from "react-router-dom";

function ItemRoot() {
    const {id} = useParams();
    
    return (
        <div>
            <NavBar />
            <ItemDetailContainer productDetail={id} />
        </div>
    )
}

export default ItemRoot;