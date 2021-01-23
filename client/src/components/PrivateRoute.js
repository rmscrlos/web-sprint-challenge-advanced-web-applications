import React from 'react';
import { Route, Redirect } from 'react-router-dom';

function PrivateRoute(props) {
	const { children, ...rest } = props;

	return (
		<Route
			{...rest}
			render={() => {
				if (localStorage.getItem('token')) {
					console.log('rending component');
					return children;
				} else {
					return <Redirect to="/login" />;
				}
			}}
		/>
	);
}

export default PrivateRoute;
