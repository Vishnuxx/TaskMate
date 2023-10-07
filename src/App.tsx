import { Route, Routes } from "react-router-dom";
import "./styles/App.css";
import "./styles/globals.css"
import Home from "./pages/Home/page";

function App() {
	return (
		<>
			<Routes>
        <Route path="/" element={<Home/>}/>
      </Routes>
		</>
	);
}

export default App;
