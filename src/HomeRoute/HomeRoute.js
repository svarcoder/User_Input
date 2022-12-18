import React from "react";
import { Route, Switch } from "react-router-dom";
import Home from "../Component/Home";
import Show from "../Component/Show";

const HomeRoute = () => {
	return (
		<>
			<Switch>
				<Route exact path='/' component={Home} />
				<Route exact path='/show' component={Show} />
			</Switch>
		</>
	);
};

export default HomeRoute;
