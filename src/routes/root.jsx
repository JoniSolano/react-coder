import ItemDetailsContainer from "../components/ItemDetailContainer";
import { useParams } from "react-router-dom";
import ItemListContainer from "../components/ItemListContainer";
import NavBar from "../components/NavBar";

// import "./App.css"

function Root() {
    const params = useParams();
    const isCategoryRoute = Boolean(params.id);

    return (
        <div className="body">
            <NavBar />
            <ItemListContainer
            isCategoryRoute={isCategoryRoute}
            categoryId={params.id}
            />
        </div>
    )
}

export default Root;