import "./App.css";
import { LoginBox } from "./components/LoginBox/LoginBox";
import { NavBar } from "./components/NavBar/NavBar";
import logo from "./logo.png";

function App() {
    
		// fetch("/api/products")
        // .then((res) => res.json())
		// .then(data => console.log(data));
	

    return (
        <div className="App">
            <NavBar />
            <LoginBox />
        </div>
    );
}

export default App;
