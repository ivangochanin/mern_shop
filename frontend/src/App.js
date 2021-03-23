import "./styles/styles.scss"
import { BrowserRouter, Route, Switch } from "react-router-dom"
import Navbar from "./components/layout/Navbar"
import Footer from "./components/layout/Footer"
import HomeScreen from "./components/screens/HomeScreen"
import Error from "./components/screens/Error"

const App = () => {
	return (
		<BrowserRouter>
			<Navbar />
				<main>
				<Switch>
					<Route path='/' component={HomeScreen} exact />
					<Route path='/card' component={HomeScreen} />
					<Route path='/signin' component={HomeScreen} />
					<Route component={Error} />
				</Switch>
				</main>
			<Footer />
		</BrowserRouter>
	);
};

export default App;
