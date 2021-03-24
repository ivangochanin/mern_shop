import "./styles/styles.scss"
import { BrowserRouter, Route, Switch } from "react-router-dom"
import Navbar from "./components/layout/Navbar"
import Footer from "./components/layout/Footer"
import Home from "./components/screens/Home"
import Login from "./components/screens/Login"
import Cart from "./components/screens/Cart"
import Error from "./components/screens/Error"

const App = () => {
	return (
		<BrowserRouter>
			<Navbar />
				<main>
				<Switch>
					<Route path='/' component={Home} exact />
					<Route path='/cart' component={Cart} />
					<Route path='/login' component={Login} />
					<Route component={Error} />
				</Switch>
				</main>
			<Footer />
		</BrowserRouter>
	);
};

export default App;
