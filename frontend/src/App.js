import "./styles/styles.scss"
import { BrowserRouter, Route, Switch } from "react-router-dom"
import Navbar from "./components/layout/Navbar"
import Footer from "./components/layout/Footer"
import Home from "./screens/Home"
import Login from "./screens/Login"
import Cart from "./screens/Cart"
import Error from "./screens/Error"

const App = () => {
	return (
		<BrowserRouter>
			<Navbar />
				<main>
				<div className="container">
					<Switch>
						<Route path='/' component={Home} exact />
						<Route path='/cart' component={Cart} />
						<Route path='/login' component={Login} />
						<Route component={Error} />
					</Switch>
				</div>
				</main>
			<Footer />
		</BrowserRouter>
	);
};

export default App;
