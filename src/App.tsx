import { Route, Routes } from "react-router-dom";
import "./styles/App.css";
import "./styles/globals.css";


import { APPROUTES } from "./constants/AppRoutes";

import AuthPage from "./pages/Auth/Auth";
import Login from "./components/Auth/Login/Login";
import Signup from "./components/Auth/Signup/Signup";
import Home from "./pages/Home/home";
import TodoPage from "./pages/Todo/todo";


function App() {
	return (
		<>
			<Routes>
				<Route path={APPROUTES.home} element={<Home/>} />
				<Route path={APPROUTES.auth} element={<AuthPage />}>
					<Route path={APPROUTES.login} element={<Login />} />
					<Route path={APPROUTES.signup} element={<Signup />} />
				</Route>
				<Route path={APPROUTES.todo} element={<TodoPage />} />
			</Routes>
		</>
	);
}

export default App;
