import "./App.css";
import HomeRoute from "./HomeRoute/HomeRoute";
import { BrowserRouter } from "react-router-dom";
import CustomerProvider from "./Context/Provider";

function App() {
	return (
		<div className='App'>
			<BrowserRouter>
				<CustomerProvider>
					<HomeRoute />
				</CustomerProvider>
			</BrowserRouter>
		</div>
	);
}

export default App;
