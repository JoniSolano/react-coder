import ItemListContainer from "./components/ItemListContainer";
import NavBar from "./components/NavBar";
import "./App.css"

function App() {
    return (
        <div className="body">
            <NavBar />
            <ItemListContainer greeting={"Hola mundo"} />
        </div>
    )
}

export default App;