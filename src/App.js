import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import NotFound from './NotFound'
import Test from "./test";

class App extends Component {
	render() {
		return (
			<React.Fragment>

				<Router>
					<Switch>
						<Route exact="/" path="/" component={Test} />
						<Route path="*" component={NotFound} />
					</Switch>
				</Router>
			</React.Fragment>
		);
	}
}

export default App;