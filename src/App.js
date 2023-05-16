import "./App.css";
import { NavBar } from "./components/NavBar/NavBar";
import logo from "./logo.png";

function App() {
    
		// fetch("/api/products")
        // .then((res) => res.json())
		// .then(data => console.log(data));
	

    return (
        <div className="App">
            <NavBar />
        </div>
    );
}

export default App;
