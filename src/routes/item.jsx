import ItemListContainer from "../components/ItemListContainer";
import NavBar from "../components/NavBar";
import ItemDetailContainer from "../components/ItemDetailContainer";

function ItemRoot() {
    return (
        <div>
            <NavBar />
            <ItemDetailContainer />
        </div>
    )
}

export default ItemRoot;